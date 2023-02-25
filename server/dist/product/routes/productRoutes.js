"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const router = express_1.default.Router();
exports.productRoutes = router;
router.get('/products', productController_1.productController.getAllProducts);
// router.delete('/products', productController.deleteAllProducts);
router.post('/product', productController_1.productController.createProduct);
router.get('/product/:id', productController_1.productController.getSingleProduct);
router.put('/product/:id', productController_1.productController.updateProduct);
router.delete('/product/:id', productController_1.productController.deleteProduct);
