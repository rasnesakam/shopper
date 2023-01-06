import Category from "../types/Category";
import Product from "../types/Product";
import fetcData from "./fetchData";

export default function 
getProductsByCategory(
	category: Category,
	{size = 0, page = 0}: {size:number, page: number}
	): Array<Product>{
	const shopAppUrl = "";
	return fetcData(
		`${shopAppUrl}/products/category/${category.uri}`,
		[
			{"size": size.toString()},
			{"page":page.toString()}
		]
	);
}