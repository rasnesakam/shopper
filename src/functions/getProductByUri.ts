import Product from "../types/Product";
import config from "./config";
import fetcData from "./fetchData";

export default async function getProductByUri(uri: string): Promise<Product> {
	let url = config.SHOP_APP_URL + "/Products/" + uri;
	return await fetcData<Product>(url).then(list => list[0]);

}