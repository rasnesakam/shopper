import {Menus} from "../Menus"
import Image from "next/image"
function NavBar(){

	return <>
	
		<div className="w-full bg-ground">
			<Image src="/images/batarya_dunyasi_design.png" width={128} height={128} />
		</div>
		<div className="w-full bg-primary h-10  flex flex-row justify-center align-center">
			<Menus/>
		</div>

	</>
}

export {NavBar}