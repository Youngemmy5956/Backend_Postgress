import express from 'express';
import { connectDatabase } from './config/database';
import setRoutes from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDatabase();

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});