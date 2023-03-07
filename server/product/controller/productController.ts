import { Request, Response } from "express";
import { productService } from '../services/productService';

//GET '/products/:id'
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (!id) return res.json({ message: `id is required` });
        const result = await productService.getSingleProduct(id);
        res.json(result);
    } catch (err) {
        console.log(err)
        res.json({ message: `err happened ` });
    }
}

//GET '/products'
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await productService.getAllProducts();
        res.json(result);

    } catch (err) {
        console.log(err)
        res.json({ message: `err happened ` });
    }
};

//POST '/products'
const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, size, price, category_id, description } = req.body
        const result = await productService.createProduct({ name, size, price, category_id, description });
        res.json(result);
    } catch (err) {
        console.log(err)
        res.json({ message: `err happened ` });
    }
};

//PUT '/products'
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name, size, price, category_id, description } = req.body
        const result = await productService.updateProduct(id, { name, size, price, category_id, description });
        res.json(result);
    } catch (err) {
        console.log(err)
        res.json({ message: `err happened ` });

    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await productService.deleteProduct(parseInt(id));
        res.json(result);
    } catch (err) {
        console.log(err)
        res.json({ message: `err happened ` });
    }
}

export const productController = { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };