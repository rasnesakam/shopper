import Product from "@type/Product";
import products from "../mock/products";

export default async function getProductByUri(uri: string): Promise<Product> {
	//let url = config.SHOP_APP_URL + "/Products/" + uri;
	//return await fetcData<Product>(url).then(list => list[0]);
	return new Promise(resolve => {
		resolve(products.filter(product => product.uri === uri)[0]);
	})
}