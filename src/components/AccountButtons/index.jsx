import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"

function AccountButtons (){
	return <>
			<div className=" mr-5 flex flex-row justify-center">

				<div className="my-auto px-1">
					<FontAwesomeIcon icon={faUser} className="my-auto text-gray-500" />
					<span className="my-auto pl-2">Hesabım</span>
				</div>
				<div className="my-auto px-1">
					<FontAwesomeIcon icon={faHeart} className="my-auto text-gray-500 " />
					<span className="my-auto pl-2">Favorilerim</span>
				</div>
				<div className="my-auto px-1">
					<FontAwesomeIcon icon={faCartArrowDown} className="my-auto text-gray-500 " />
					<span className="my-auto pl-2">Sepetim</span>
				</div>

			</div>
		</>
}
export {AccountButtons}