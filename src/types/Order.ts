import Product from "./Product";

type Order = {
	products: Array<{product:Product, amount:number, status?: string}>,
	number: number
};

export default Order;