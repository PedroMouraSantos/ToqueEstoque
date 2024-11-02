import { Router } from 'express';
import { addProduct, getProducts, editProduct, deleteProduct } from '../controllers/productController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Rota para adicionar um novo produto
router.post('/products', authMiddleware, addProduct);

// Rota para visualizar todos os produtos
router.get('/products', authMiddleware, getProducts);

// Rota para editar um produto existente
router.put('/products/:id', authMiddleware, editProduct);

// Rota para excluir um produto
router.delete('/products/:id', authMiddleware, deleteProduct);

export default router;
