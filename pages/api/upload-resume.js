import formidable from "formidable";
import { put } from "@vercel/blob";
import pool from "../../lib/db"; // your Postgres connection
import fs from "fs";

// 1) Disable Next.js body parsing, because formidable handles it
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 2) Parse multipart form data
    const { fields, files } = await new Promise((resolve, reject) => {
      const form = formidable({ multiples: false }); // single file
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    // files.resumeFile is an array in Formidable 3.x
    const fileArray = files.resumeFile;
    if (!fileArray || fileArray.length === 0) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const uploadedFile = fileArray[0]; // the actual PersistentFile object
    const fileData = fs.readFileSync(uploadedFile.filepath);
    const originalName = uploadedFile.originalFilename || "resume.pdf";

    // Upload to Vercel Blob
    const blobName = `resumes/${Date.now()}-${originalName}`;
    const result = await put(blobName, fileData, {
      access: "public",
      contentType: uploadedFile.mimetype || "application/octet-stream",
    });

    const fileURL = result.url;

    // 5) Insert record in DB
    // Suppose you have a 'resumes' table with (user_id, file_url, file_name, created_at)
    // We'll just use a hardcoded user_id = 123 for demonstration
    const user_id = 123;
    await pool.query(
      `INSERT INTO resumes (user_id, file_url, file_name) VALUES ($1, $2, $3)`,
      [user_id, fileURL, originalName]
    );

    return res.status(201).json({ success: true, fileURL });
  } catch (err) {
    console.error("Error uploading or inserting record:", err);
    return res
      .status(500)
      .json({ error: "Failed to process file upload or DB insert" });
  }
}
