import { GetServerSidePropsContext } from "next";
import { ProductItem } from "../../src/components/ProductItem";
import searchProducts from "../../src/functions/searchProducts";
import Product from "../../src/types/Product";

export async function getServerSideProps(context: GetServerSidePropsContext){
	const { search } = context.query;
	const list = await searchProducts(search as string)
	return {
		props:{
			list
		}
	}
}

export default function Arama({list}: {list: Array<Product>}){
	return <>
	
		<div className="mt-5 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4k:grid-cols-6">

			{list.map((item, index) => {
				return <ProductItem key={index} itemId={`${index}`} product={item} />
			})}

		</div>
	
	</>
}