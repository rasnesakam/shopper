type Product = {
	name: string;
	description: string;
	productImage: Array<{
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
	createdAt?: Date;
	props?: Array<{key: string, value:string}>
	
}

export default Product;