import express from 'express';
import pool from './config/postgress';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Example query
    res.json({ message: 'API is working!', timestamp: result.rows[0].now });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});