import Head from 'next/head'
import {NavBar} from "../src/components/NavBar"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Slide} from '../src/components/Slide'
import { ProductItem } from '../src/components/ProductItem'
import Layout from "./layout"
import { HorizontalProdutsList } from '../src/components/HorizontalProductList'
import Category from '../src/types/Category'
import { useEffect, useState } from 'react'
import getCategories from '../src/functions/getCategories'
import getProductsByCategory from '../src/functions/getProductsByCategory'



export default function Home() {
	
	const empty: Array<Category> = [];
	const [categories, setCategories] = useState(empty);
	useEffect(() => {
		async function fetchData(){
			var datas = await getCategories();
			setCategories(datas);
		}
		fetchData()
	},[]);

	return (
    <>
		<Slide timeout={3000} items={[
			    {imageUri: "/images/batarya_dunyasi_design.png",redirectTo: ""},
			    {imageUri: "/images/logo_bd_180x180.png", redirectTo: ""},
		      ]}/>

		{/* Öne Çıkan Ürünler */}
		{categories.map((category, index) => {
			return <HorizontalProdutsList key={index} title={category.name} productProvider={async () => getProductsByCategory(category,{size:5, page: 0})} />
		})}
	</>
  )
}
