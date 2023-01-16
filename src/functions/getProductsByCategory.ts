import Category from "../types/Category";
import Product from "../types/Product";
import config from "./config";
import fetcData from "./fetchData";

export default async function 
getProductsByCategory(
	category: Category,
	{size = 0, page = 0}: {size:number, page: number}
	): Promise<Array<Product>>{
	const shopAppUrl = config.SHOP_APP_URL + `/Products/Category/${category.uri}`;
	return fetcData(
		shopAppUrl,
		[
			{"size": size.toString()},
			{"page":page.toString()}
		]
	);
}