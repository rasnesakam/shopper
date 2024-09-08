import Category from "@type/Category"
import categories from "../mock/categories"

export default async function 
getCategories(): Promise<Array<Category>>{
	//let url = config.SHOP_APP_URL + "/Categories"
	//return await fetcData(url);
	return new Promise((resolve, reject) => {
		resolve(categories.map(category => category.category))
	})
}