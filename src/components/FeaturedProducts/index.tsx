import { ProductItem } from "../ProductItem";
import { useState } from "react";

const FeaturedProducts = () => {

	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

	return <>
	
		<div className="w-full my-5">
			<span className="text-2xl ml-5">Öne Çıkanlar</span>
			<div className="border border-primary rounded-lg w-full gap-x-2 flex flex-row">
			

						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>
						<ProductItem product={{name:"item1",description:"item1",imageUrl:"/images/logo_bd_180x180.png",uri:"",price:10}}/>

			
			</div>
		</div>
	
	</>
}

export {FeaturedProducts};