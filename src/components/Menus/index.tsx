import Link from "next/link";
import { useState, useEffect } from "react";
import Category from "../../types/Category";
import getCategories from "../../functions/getCategories";

function Menus(){

	let empty: Category[] = [];
	const [menuItems, setMenuItems] = useState(empty);
	useEffect(() => {
		async function fetchData(){
			let datas = await getCategories()
			setMenuItems(datas);
		}
		fetchData();
	},[])
	return <>
		<ul className="w-11/12 flex flex-row flex-wrap justify-center">
			{menuItems.map((menuItem,index) => 
				<li key={index} className="m-3 text-ground text-center">
					<Link href={`/kategori/${menuItem.uri}`}>{menuItem.name}</Link>
				</li>
				)}			
		</ul>
	</>
}

export {Menus}