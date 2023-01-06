import Head from 'next/head'
import {NavBar} from "../src/components/NavBar"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Slide} from '../src/components/Slide'
import { ProductItem } from '../src/components/ProductItem'
import Layout from "./layout"
import { FeaturedProducts } from '../src/components/FeaturedProducts'


function HelloWorld(){
	return <>
	
	<h1>BEN AYBUKE</h1>
	
	</>
}

export default function Home() {
  return (
    <>
		<Slide timeout={5000} items={[
			    {imageUri: "/images/batarya_dunyasi_design.png",redirectTo: ""},
			    {imageUri: "/images/logo_bd_180x180.png", redirectTo: ""},
		      ]}/>
		<FeaturedProducts />
	</>
  )
}
