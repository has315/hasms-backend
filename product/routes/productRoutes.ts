import express from 'express';
import { productController } from '../controller/productController';
const router = express.Router();

router.get('/products', productController.getAllProducts);
// router.delete('/products', productController.deleteAllProducts);

router.post('/product', productController.createProduct);
router.get('/product/:id', productController.getSingleProduct);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

export { router as productRoutes };