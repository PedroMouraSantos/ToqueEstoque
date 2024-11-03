import express from 'express';
import { addProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/products', authMiddleware, addProduct);
router.get('/products', authMiddleware, getProducts);
router.put('/products/:id', authMiddleware, updateProduct);
router.delete('/products/:id', authMiddleware, deleteProduct);

export default router;
