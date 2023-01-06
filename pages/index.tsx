import Head from 'next/head'
import {NavBar} from "../src/components/NavBar"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Slide} from '../src/components/Slide'
import { ProductItem } from '../src/components/ProductItem'
import Layout from "./layout"
import { HorizontalProdutsList } from '../src/components/HorizontalProductList'
import Category from '../src/types/Category'



export default function Home() {
	
	const categories: Array<Category> = [];


	return (
    <>
		<Slide timeout={3000} items={[
			    {imageUri: "/images/batarya_dunyasi_design.png",redirectTo: ""},
			    {imageUri: "/images/logo_bd_180x180.png", redirectTo: ""},
		      ]}/>

		{/* Öne Çıkan Ürünler */}
		<HorizontalProdutsList title="Öne Çıkanlar" items={[
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10},
			{name:"item1",description:"item1",imageUrl:["/images/logo_bd_180x180.png"],uri:"",price:10}
		]} />
	</>
  )
}
