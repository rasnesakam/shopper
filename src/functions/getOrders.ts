import {getCookie} from "cookies-next"
import { getCookieParser } from "next/dist/server/api-utils";
import Order from "../types/Order";
import Product from "../types/Product";

export default function getOrders(cookieName: string): Order{
	let cookie = getCookie(cookieName);
	let object = JSON.parse(cookie?.toString() ?? "{}");
	let order: Order = {products:[]}
	if (object.products != undefined && 
		object.product instanceof Array<{product: Product,amount: number}>){
		order.products = object.products
	}
	return order
}