import express from 'express';
import prisma from './config/postgress';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // Example query
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
