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
exports.productService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma.product.findFirst({
        where: {
            id: {
                equals: Number(productId)
            }
        },
        include: {
            category: true,
            sizes: true,
            variants: {
                include: {
                    colors: true
                }
            },
        }
    });
    return product;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany({
        include: {
            category: true,
            variants: {
                include: {
                    colors: true
                }
            },
            sizes: true
        }
    });
    return products;
});
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const productResult = yield prisma.product.create({
        data: {
            name: product.name,
            size: product.size,
            price: Number(product.price),
            category: { connect: { id: parseInt(product.category_id) } },
            description: product.description,
        }
    });
    return productResult;
});
const updateProduct = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(Object.assign({}, product));
    const oldProduct = yield prisma.product.findUnique({
        where: { id: Number(id) }
    });
    const productUpdateResult = yield prisma.product.update({
        where: { id: Number(id) },
        data: {
            name: product.name ? product.name : (oldProduct === null || oldProduct === void 0 ? void 0 : oldProduct.name) || '',
            size: product.size ? product.size : (oldProduct === null || oldProduct === void 0 ? void 0 : oldProduct.size) || '',
            price: Number(product.price) ? Number(product.price) : (oldProduct === null || oldProduct === void 0 ? void 0 : oldProduct.price) || 0,
            category_id: parseInt(product.category_id) ? parseInt(product.category_id) : (oldProduct === null || oldProduct === void 0 ? void 0 : oldProduct.category_id) || 0,
            description: product.description ? product.description : (oldProduct === null || oldProduct === void 0 ? void 0 : oldProduct.description) || '',
        }
    });
    return productUpdateResult;
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma.product.delete({
        where: { id: Number(productId) }
    });
    return product;
});
exports.productService = { getSingleProduct, getAllProducts, createProduct, updateProduct, deleteProduct };
