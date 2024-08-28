import Image from "next/image";
import { useRouter } from "next/router"
import { useState } from "react";
import Product from "../../src/types/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faPlus,
	faMinus,
	faHeart as filledHeart,
	faArrowTrendDown
 } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setOrderData, addOrder } from "../../src/redux/slices/order";
import { AppState } from "../../src/redux/store";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import getProductByUri from "../../src/functions/getProductByUri";
import {OrderDetailsForm} from "../../src/components/OrderDetailsForm";
import {Incrementor} from "../../src/components/Incrementor";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const productUri = context.query.uri;
	const product = await getProductByUri(decodeURI(productUri as string));
	//todo provide an empty value for product
	return {
		props:{
			product: product ?? {
				name:"LG Chem INR18650M26 - 3.7V 2600mAh Li-ion Şarjlı Pil - 10A",
				description: "",
				productImage: [{
					id:"",
					fileUri:"",
					altText:"",
					productId:""
				}],
				price: 59.99,
				uri: "",
				stockCode: "900.817.503.009",
				mark: "LG",
				props: [
					{key:"Pil türü",value:"Li-ion"},
					{key:"Amper değeri",value:"10A"},
					{key:"Voltaj değeri",value:"3.7V"},
					{key:"mAh değeri",value:"2600mAh"},
				]
			}
		}
	}
}

export default function Products({product}: {product: Product}){

	const [height, width] = [360,360];
	const favoriteTexts = ["Favorilere Ekle", "Favorilerden Çıkart"];

	const [amount, setAmount] = useState(1);
	const [favoriteIcon, setFavoriteIcon] = useState(emptyHeart);
	const [favoriteText, setFavoriteText] = useState(favoriteTexts[0]);
	const dispatch = useDispatch();

	//TODO: Favorite actions will be implemented
	const handleFavorite = () => {
		if (favoriteIcon == emptyHeart){
			
			setFavoriteIcon(filledHeart);
			setFavoriteText(favoriteTexts[1]);
		}
		else{
			
			setFavoriteIcon(emptyHeart);
			setFavoriteText(favoriteTexts[0]);
		}
	}

	// Handle cart action
	const addCard = () => {
		dispatch(addOrder({product, amount}))
	};

	return <>
		<div className="rounded-lg border border-gray-400 w-full md:w-11/12 m-5 p-5">
			<div className="rounded-lg border  border-gray-300 sm:w-1/2 sm:float-left md:w-[360px] md:h-[360px]">
				<Image src={product.productImages[0].fileUri} alt={product.uri} width={width} height={height} className="mx-auto"/>
			</div>
			<div className="sm:float-left sm:w-1/2 p-2">
				<div className="text-2xl font-bold">{product.name}</div>
				<div>Stok kodu: {product.stockCode}</div>
				<div>Marka: {product.mark}</div>
				<div className="text-2xl font-bold text-secondary">{product.price} ₺</div>
				<hr/>
				<div className="p-2 ">
					<div>
						Ürün detaylarını seç
					</div>
					<OrderDetailsForm form={product.form}/>
				</div>
				<hr/>
				<div className="w-full flex flex-row md:w-2/3 mt-2">
					<Incrementor value={amount} onChange={setAmount} onSubmit={addCard} />
				</div>
				<div className="w-full flex flex-row gap-5 md:w-2/3 mt-4">
					<div className="flex flex-col items-center w-1/3 select-none cursor-pointer"
						 onClick={handleFavorite}>
						<FontAwesomeIcon icon={favoriteIcon} className="text-red-600 text-3xl"/>
						<div className="text-center">{favoriteText}</div>
					</div>
					{/*
					<div className="flex flex-col items-center w-1/3 select-none cursor-pointer">
						<FontAwesomeIcon icon={faRightLeft} className="text-gray-700 text-3xl"/>
						<div>Karşılaştır</div>
					</div>
					*/}
					<div className="flex flex-col items-center w-1/3 select-none cursor-pointer">
						<FontAwesomeIcon icon={faArrowTrendDown} className="text-gray-700 text-3xl"/>
						<div className="text-center">Fiyatı düşünce haber ver</div>
					</div>
				</div>
			</div>
		</div>
		<div className="rounded-lg border border-gray-400 w-full md:w-11/12 m-5">
			<div className="bg-primary rounded-t-lg p-3 text-white">Ürün Özellikleri</div>
			<div className="flex flex-col divide-y-2">
				{product.props?.map((item,index) => {
					return <div className="py-1" key={index}>
								<div className="float-left w-1/3 text-center">{item.key}</div>
								<div className="float-left w-2/3 text-left">{item.value}</div>
							</div>
				
				})}
			</div>
		</div>
	</>
}