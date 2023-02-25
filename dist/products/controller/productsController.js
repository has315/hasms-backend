"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
//GET '/products'
const getAllProducts = (req, res) => {
    res.json({ message: "GET all tea" });
};
exports.productsController = { getAllProducts };
