import Product from "./Product";

type Order = {
	products: Array<{product:Product, amount:number, status?: string}>
};

export default Order;