import {OrderForm} from "./OrderForm";

type Product = {
	name: string;
	description: string;
	productImages: Array<{
		fileUri: string,
		altText: string
	}>;
	categories: Array<{
		name: string,
		uri: string
	}>;
	tags: Array<{
		tag: string
	}>;
	properties: Array<{key: string, value:string}>,
	uri: string;
	price: number;
	brand?: string,
	createdAt?: number;
	form?: OrderForm[]
	
}

export default Product;