import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getSingleProduct = async (productId: number | string) => {
    const product = await prisma.product.findFirst({
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
    })
    return product
}

const getAllProducts = async () => {
    const products = await prisma.product.findMany(
        {
            include: {
                category: true,
                variants: {
                    include: {
                        colors: true
                    }
                },
                sizes: true
            }
        }
    )
    return products
}


const createProduct = async (product: any) => {
    const productResult = await prisma.product.create({
        data: {
            name: product.name,
            size: product.size,
            price: Number(product.price),
            category: { connect: { id: parseInt(product.category_id) } },
            description: product.description,
        }
    })
    return productResult
}

const updateProduct = async (id: String, product: any) => {
    console.log({ ...product })
    const oldProduct = await prisma.product.findUnique({
        where: { id: Number(id) }
    })

    const productUpdateResult = await prisma.product.update({
        where: { id: Number(id) },
        data: {
            name: product.name ? product.name : oldProduct?.name || '',
            size: product.size ? product.size : oldProduct?.size || '',
            price: Number(product.price) ? Number(product.price) : oldProduct?.price || 0,
            category_id: parseInt(product.category_id) ? parseInt(product.category_id) : oldProduct?.category_id || 0,
            description: product.description ? product.description : oldProduct?.description || '',
        }
    })
    return productUpdateResult
}

const deleteProduct = async (productId: number) => {
    const product = await prisma.product.delete({
        where: { id: Number(productId) }
    })
    return product
}

export const productService = { getSingleProduct, getAllProducts, createProduct, updateProduct, deleteProduct };