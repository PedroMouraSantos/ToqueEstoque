import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api', productRoutes);

export default app;
