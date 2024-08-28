import Category from "../types/Category";
import Product from "../types/Product";
import products from "./products";
const categories: Array<{category: Category, products: Array<Product>}> = [
    {
        category: {
            name: "Pil",
            uri: "pil",
        },
        products: products
    }
]
export default categories;