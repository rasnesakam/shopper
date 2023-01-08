import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

function AccountButtons (){
	const user = {};
	return <>
			<div className=" mr-5 flex flex-row justify-center">

				<div className="my-auto px-1">
					<Link href="/hesap" className="group">
						<FontAwesomeIcon icon={faUser} className="my-auto text-gray-500 group-hover:text-primary" />
						<span className="my-auto pl-2 group-hover:text-primary">Hesabım</span>
					</Link>
				</div>
				<div className="my-auto px-1">
					<Link href="/fav" className="group">
						<FontAwesomeIcon icon={faHeart} className="my-auto text-gray-500 group-hover:text-primary" />
						<span className="my-auto pl-2  group-hover:text-primary">Favorilerim</span>
					</Link>
					
				</div>
				<div className="my-auto px-1">
					<Link href="/sepet" className="group">
						<FontAwesomeIcon icon={faCartArrowDown} className="my-auto text-gray-500 group-hover:text-primary" />
						<span className="my-auto pl-2 group-hover:text-primary">Sepetim</span>
					</Link>
				</div>

			</div>
		</>
}
export {AccountButtons}