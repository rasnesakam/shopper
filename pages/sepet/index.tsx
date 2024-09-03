import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie } from "cookies-next"
import Image from "next/image";
import { useState } from "react";
import getOrders from "../../src/functions/getOrderFromCookie";
import Order from "../../src/types/Order";
import Product from "../../src/types/Product";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { AppState } from "../../src/redux/store";
import { removeOrder } from "../../src/redux/slices/order";
import config from "../../src/functions/config";
import {useCartContext} from "../../src/contexts/cart/CartContextAdapter";

function OrderItem(order:{product: Product, amount:number, status?:string, index: number}){
	let statusComponent = <></>;
	if (order.status != undefined)
	{
		statusComponent = <div>{order.status}</div>
	}
	const [amount, setAmount] = useState(order.amount);
	const [width, height] = [128,128]
	const image = order.product.productImages.length > 0 ? order.product.productImages[0].fileUri: "/images/default.png";
	const altText = order.product.productImages.length > 0 ? order.product.productImages[0].altText: "";
	const {deleteItem} = useCartContext();
	return <>
		<div className="border shadow-md mb-5 p-2 rounded-lg flex flex-row flex-wrap">
			<div className="w-full md:w-1/6">
				<Image src={`/remote/images/${image}`}
				 alt={altText} width={width} height={height} className="mx-auto"/>
			</div>
			<div className="w-full md:w-3/6">
				<div className="text-xl font-semibold">{order.product.name}</div>
				{statusComponent}
				<div className="mt-5">
					<div className="w-full p-1 md:w-2/3 md:p-0 flex flex-row flex-wrap float-right">
						<div className="w-1/2 h-[48px] flex items-center divide-x-2 border border-gray-400 rounded-sm">
							
							<button className="text-2xl h-full font-bold w-3/12 hover:bg-primary  hover:text-white"
								onClick={() => setAmount(Math.max(1,amount - 1))}>
								<FontAwesomeIcon icon={faMinus} />
							</button>
							<div className="text-2xl text-center w-6/12">{amount}</div>
							<button className="text-2xl h-full font-bold w-3/12 hover:bg-primary hover:text-white"
								onClick={() => setAmount(amount + 1)}>
								<FontAwesomeIcon icon={faPlus} />
							</button>
						</div>
						<button className="w-1/2 h-[48px] bg-primary text-center text-white"
							onClick={() => {}}>Güncelle
						</button>
					</div>
				</div>
			</div>
			<div className="w-full md:w-2/6 flex flex-row items-center">
				<div className="w-1/2 text-center">{order.product.price} ₺</div>
				<div className="w-1/2 text-center">
					<button className="p-1 rounded-sm hover:text-primary focus:border focus:border-primary" onClick={() => {
						alert("deleting index: " + order.index);
						deleteItem(order.index);
					}}>
						<FontAwesomeIcon icon={faTrashCan} className="text-xl" />
					</button>
				</div>
			</div>
		</div>
	</>
}

export default function Sepet(){
	const [checked, setChecked] = useState(false);
	const checkStyle = "bg-primary";
	const checkedContent = <FontAwesomeIcon icon={faCheck} size="xs" className="absolute top-0 left-0 text-white"/>
	const {cart} = useCartContext();
	
	const priceOrder = cart.products.reduce((sum, item) => sum + (item.product.price * item.amount), 0);
	const priceCargo = 10;
	const priceTotal = Math.floor((priceOrder + priceCargo) * 100 ) / 100;
	return <div className="w-full px-5 pt-5">
		
		<div className="flex flex-row justify-center gap-2 pt-5 flex-wrap">
			<div className="w-11/12">Sepetim <span className="">({cart.products.length} Ürün)</span></div>
			<div className="w-full  lg:w-7/12">
				{cart.products.map((product,index) => <OrderItem product={product.product} amount={product.amount} index={index} key={index} />)}
			</div>
			<div className="w-full lg:w-4/12">
				<div className="border w-full shadow-md rounded-lg flex flex-col divide-y-2 p-5">
					<div className="p-2 flex flex-row">
						<div className="w-1/2 text-left">Tutar</div>
						<div className="w-1/2 text-right">{priceOrder} ₺</div>
					</div>
					<div className="p-2 flex flex-row">
						<div className="w-1/2 text-left">Kargo</div>
						<div className="w-1/2 text-right">{priceCargo} ₺</div>
					</div>
					<div className="p-2 flex flex-row">
						<div className="w-1/2 text-left">Toplam tutar</div>
						<div className="w-1/2 text-right">{priceTotal} ₺</div>
					</div>
					<div className="flex p-2 flex-row">
						<div className="w-1/12 flex flex-col justify-center">
							<div className={`w-4 h-4 relative rounded border shadow-md select-none cursor-pointer ${checked ? checkStyle: ""}`}
								onClick={() => {setChecked(!checked)}}>
									{checked ? checkedContent:""}
							</div>
						</div>
						<div className="w-10/12 ml-1">
							Ön Bilgilendirme Koşullarını ve Mesafeli Satış Sözleşmesini okudum, onaylıyorum.
						</div>
					</div>
					<div className="flex p-2 justify-center flex-row">
						<button className="bg-primary disabled:bg-gray-400 disabled:brightness-75 p-2 rounded-lg text-ground" disabled={!checked}>Siparişi Onayla</button>
					</div>
				</div>
			</div>
		</div>
	</div>
}