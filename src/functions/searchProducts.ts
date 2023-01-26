import Product from "../types/Product";
import config from "./config";
import fetcData from "./fetchData";

export default async function searchProducts(searchName: string): Promise<Array<Product>>{
	const url = config.SHOP_APP_URL + `/Products/Search/${searchName}`
	const datas: Array<Product> = await fetcData(url);
	return datas;
}