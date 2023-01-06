type Product = {
	name: string;
	description: string;
	imageUrl: Array<string>;
	uri: string;
	price: number;
	stockCode?: string,
	mark?: string,
	createdAt?: Date;
	props?: Array<{key: string, value:string}>
	
}

export default Product;