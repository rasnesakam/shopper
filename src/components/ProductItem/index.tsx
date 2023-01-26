import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import Product from "../../types/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const ProductItem = ({product, itemId}: {product: Product, itemId?:string}) => {
	const height = 256;
	const width = 256;

	return <>
		<div id={itemId != undefined ? itemId : ""} className="relative border border-gray-200 rounded-lg shadow-md px-2 py-2 min-w-fit">
			<Link href={`/urun/${product.uri}`}>
				<Image src={product.productImage != undefined ? product.productImage[0].fileUri: ""} width={width} height={height} alt={product.name} />
				<div>{product.name}</div>
				<div>Başlangıç fiyatı <span className="font-bold ">{product.price} ₺</span></div>
			</Link>
			<button className="absolute top-1 right-1 bg-white rounded-full flex items-center p-1">
				<FontAwesomeIcon icon={faHeartRegular} className="text-red-500 text-sm" />
			</button>
		</div>
	</>
};

export {ProductItem};