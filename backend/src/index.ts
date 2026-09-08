import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import destinationRoutes from './modules/destinations/destination.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/destinations', destinationRoutes);

app.get('/', (req, res) => {
  res.send('Nova backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});