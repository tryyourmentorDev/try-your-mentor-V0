import { Pool } from "pg";

let pool;

// This check prevents creating multiple pools in dev mode (hot reloads).
if (!global._pool) {
  global._pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Optional: if using Vercel Postgres or a service that requires SSL, you can set:
     ssl: {
       rejectUnauthorized: false,
     },
  });
}

pool = global._pool;

export default pool;
