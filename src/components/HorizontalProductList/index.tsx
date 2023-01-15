import { ProductItem } from "../ProductItem";
import { useState } from "react";
import Product from "../../types/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const HorizontalProdutsList = ({title,items}:{title:string,items: Array<Product>}) => {

	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;


	return <>
	
		<div className="w-full p-5 relative">
			<span className="text-2xl ml-2">{`${title}:`}</span>
			<div className="border border-primary rounded-lg w-full p-2 gap-x-2 flex flex-row overflow-x-scroll scroll scroll-smooth">
			
				{items.map((product: Product, index: number) => {
					return <ProductItem product={product} itemId={`urun-${index}`} key={index}/>
				})}

			</div>
			<a href={`#urun-${activeItemIndex}`} className="absolute top-[50%] left-7 bg-white rounded-full shadow-lg border border-spacing-1.5 flex items-center p-2"
				onClick={() => setActiveItemIndex((activeItemIndex + items.length - 1) % items.length)}>
				<FontAwesomeIcon icon={faAngleLeft} className="text-gray-700 text-2xl" />
			</a>
			<a href={`#urun-${activeItemIndex}`} className="absolute top-[50%] right-7  bg-white rounded-full shadow-lg border border-spacing-1.5 flex items-center p-2"
				onClick={() => setActiveItemIndex((activeItemIndex + 1) % items.length)}>
				<FontAwesomeIcon icon={faAngleRight} className="text-gray-700 text-2xl" />
			</a>
		</div>
	
	</>
}

export {HorizontalProdutsList};