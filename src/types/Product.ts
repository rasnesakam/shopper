import {OrderForm} from "./OrderForm";

type Product = {
	name: string;
	description: string;
	productImages: Array<{
		id:string
		productId: string,
		product?: Product,
		fileUri: string,
		altText: string
	}>;
	uri: string;
	price: number;
	stockCode?: string,
	mark?: string,
	createdAt?: number;
	props?: Array<{key: string, value:string}>,
	form?: OrderForm[]
	
}

export default Product;