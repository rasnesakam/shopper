import Category from "../types/Category";
import Product from "../types/Product";
import config from "./config";
import fetcData from "./fetchData";
import categories from "../mock/categories";

export default async function 
getProductsByCategory(
	category: Category,
	{size = 0, page = 0}: {size:number, page: number}
	): Promise<Array<Product>>{
	/*
	const shopAppUrl = config.SHOP_APP_URL + `/Products/Category/${category.uri}`;
	return fetcData(
		shopAppUrl,
		[
			{"size": size.toString()},
			{"page":page.toString()}
		]
	);
	 */
	return new Promise((resolve, reject) => {
		resolve(
			categories
				.filter(ctg => ctg.category.uri ===  category.uri)
				.reduce((previousValue, currentValue) =>
					previousValue.concat(currentValue.products),Array<Product>())
		)
	})
}