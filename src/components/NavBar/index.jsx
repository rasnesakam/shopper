import {Menus} from "../Menus"
import {SearchBar} from "../SearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { library } from "@fortawesome/fontawesome-svg-core"
function NavBar(){

	return <>
	
		<div className="w-full bg-ground sm:flex sm:flex-row sm:justify-between">
			
			<Image className="mx-auto sm: mx-0" src="/images/batarya_dunyasi_design.png" width={128} height={128} />
			<div className="w-1/2 my-auto pr-5">
				<SearchBar/>
			</div>

			<div className=" mr-5 flex flex-row justify-center">

				<div className="my-auto px-1">
					<FontAwesomeIcon icon={faUser} className="my-auto text-gray-500" />
					<span className="my-auto pl-2">Hesabım</span>
				</div>
				<div className="my-auto px-1">
					<FontAwesomeIcon icon={faHeart} className="my-auto text-gray-500 "   />
					<span className="my-auto pl-2">Favorilerim</span>
				</div>
				<div className="my-auto px-1">
					<FontAwesomeIcon icon={faCartArrowDown} className="my-auto text-gray-500 " />
					<span className="my-auto pl-2">asds</span>
				</div>

			</div>

			
			
			
		</div>
		<div className="w-full bg-primary h-10  flex flex-row justify-center align-center">
			<Menus/>
		</div>
  
    </>
}

export {NavBar}