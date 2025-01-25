import { useState } from 'react';
import { storage } from '../lib/firebase-client';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Layout from '../components/Layout'; // optional

export default function ResumeReview() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      // Create a storage reference (e.g., store under 'resumes/' folder)
      const storageRef = ref(storage, `resumes/${Date.now()}-${file.name}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);

      // Get a download URL for the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref);

      alert('Upload successful!\nURL: ' + downloadURL);

      // Reset the file input
      setFile(null);
      e.target.reset();

      // (Optional) Save the downloadURL in Firestore or your DB if you want to reference it later
    } catch (err) {
      console.error('Upload error:', err);
      alert('Failed to upload file');
    }
  };

  return (
    <Layout> {/* If you have a Layout component */}
      <div className="max-w-md mx-auto p-8 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Résumé Review</h1>
        <p className="mb-4 text-gray-600">
          Upload your résumé. We’ll store it in Firebase Storage.
        </p>
        <form onSubmit={handleUpload}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <button
            type="submit"
            className="ml-4 bg-brandPurple text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Upload
          </button>
        </form>
      </div>
    </Layout>
  );
}
