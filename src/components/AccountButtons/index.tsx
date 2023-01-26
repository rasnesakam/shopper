import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

function AccountButtons (){
	return <>
			<div className="m-5 md:w-1/3 flex flex-row justify-evenly">

				<Link href="/hesap" className="my-auto group px-1">
					<div className="flex flex-col xl:flex-row items-center">
						<FontAwesomeIcon icon={faUser} className="my-auto text-gray-500 group-hover:text-primary" />
						<span className="my-auto pl-2 hidden lg:inline group-hover:text-primary ">Hesabım</span>
					</div>
				</Link>
				<Link href="/fav" className="my-auto px-1 group">
					<div className="flex flex-col xl:flex-row items-center">
						<FontAwesomeIcon icon={faHeart} className=" text-gray-500 group-hover:text-primary" />
						<span className="my-auto pl-2 hidden lg:inline group-hover:text-primary ">Favorilerim</span>
					</div>
				</Link>
					
				<Link href="/sepet" className="group my-auto px-1">
					<div className="flex flex-col xl:flex-row items-center">
						<FontAwesomeIcon icon={faCartArrowDown} className="my-auto text-gray-500 group-hover:text-primary" />
						<span className="my-auto pl-2 hidden lg:inline group-hover:text-primary ">Sepetim</span>
					</div>
				</Link>

			</div>
		</>
}
export {AccountButtons}