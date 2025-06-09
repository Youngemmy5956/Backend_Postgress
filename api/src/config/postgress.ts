import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,       // Database username
  host: process.env.DB_HOST,       // Database host
  database: process.env.DB_NAME,   // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: Number(process.env.DB_PORT) || 5432, // Database port (default: 5432)
});

export default pool;