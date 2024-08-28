import { ProductItem } from "../ProductItem";
import { useEffect, useState } from "react";
import Product from "../../types/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Slider from "react-slick";


const HorizontalProdutsList = ({title,productProvider}:{title:string,productProvider: () => Promise<Array<Product>>}) => {

	const [activeItemIndex, setActiveItemIndex] = useState(0);
	let empty: Array<Product> = []
	const [items, setItems] = useState(empty);
	const chevronWidth = 40;

	useEffect(() => {
		async function fetchData(){
			let datas = await productProvider()
			setItems(datas);
		}
		fetchData();
	},[]);

	return <>
	
		<div className="w-full p-5 relative">
			<span className="text-2xl ml-2">{`${title}:`}</span>
			
			<div className="border border-primary rounded-lg w-full p-2 gap-x-2 flex flex-row">
				{items.map((product: Product, index: number) => {
					return <ProductItem product={product} itemId={`urun-${index}`} key={index}/>
				})}
			</div>

		</div>
	
	</>
}

export {HorizontalProdutsList};
