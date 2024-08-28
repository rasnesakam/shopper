import Category from "../types/Category";
import Product from "../types/Product";
import config from "./config";
import fetcData from "./fetchData";
import categories from "../mock/categories"
import category from "../types/Category";

export default async function 
getCategories(): Promise<Array<Category>>{
	//let url = config.SHOP_APP_URL + "/Categories"
	//return await fetcData(url);
	return new Promise((resolve, reject) => {
		resolve(categories.map(category => category.category))
	})
}