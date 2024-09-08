import { useRouter } from "next/router";
import { ProductItem } from "../../src/components/ProductItem";
import getProductsByCategory from "../../src/functions/getProductsByCategory";
import Product from "../../src/types/Product";
import { GetServerSidePropsContext } from "next";
export async function getServerSideProps(context: GetServerSidePropsContext){
	const {uri} = context.query;
	const products = await getProductsByCategory({name: "", status: 1, uri:uri as string ?? ""},{page: -1,size: -1});
	return {
		props: {
			list: products
		}
	};
}

export default function Kategori({list}: {list: Array<Product>}){
	
	
	return <>
	
		<div className="mt-5 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4k:grid-cols-6">

			{list.map((item, index) => {
				return <ProductItem key={index} itemId={`${index}`} product={item} />
			})}

		</div>
	</>
}