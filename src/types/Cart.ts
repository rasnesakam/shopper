import Product from "./Product";

interface Cart {
    products: Array<{product: Product, amount: number}>;
}

export default Cart;