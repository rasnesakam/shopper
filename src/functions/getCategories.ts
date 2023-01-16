import Category from "../types/Category";
import Product from "../types/Product";
import config from "./config";
import fetcData from "./fetchData";

export default async function 
getCategories(): Promise<Array<Category>>{
	let url = config.SHOP_APP_URL + "/Categories/All"
	return await fetcData(url);

	/*
	return fetcData(
		`${shopAppUrl}/products/category/${category.uri}`,
		[
			
		]
	);
	*/
}