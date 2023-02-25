"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const productService_1 = require("../services/productService");
//GET '/products/:id'
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            return res.json({ message: `id is required` });
        const result = yield productService_1.productService.getSingleProduct(id);
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json({ message: `err happened ` });
    }
});
//GET '/products'
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield productService_1.productService.getAllProducts();
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json({ message: `err happened ` });
    }
});
//POST '/products'
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, size, price, category_id, description } = req.body;
        const result = yield productService_1.productService.createProduct({ name, size, price, category_id, description });
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json({ message: `err happened ` });
    }
});
//PUT '/products'
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, size, price, category_id, description } = req.body;
        const result = yield productService_1.productService.updateProduct(id, { name, size, price, category_id, description });
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json({ message: `err happened ` });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield productService_1.productService.deleteProduct(parseInt(id));
        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.json({ message: `err happened ` });
    }
});
exports.productController = { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };
