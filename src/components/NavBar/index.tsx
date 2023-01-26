import {Menus} from "../Menus"
import {SearchBar} from "../SearchBar"
import Image from "next/image"
import { useState, useEffect } from "react" 
import {AccountButtons} from "../AccountButtons"
import Link from "next/link"

function NavBar(){

	const height = 128;

	const [sticky, setSticky] = useState({});
	const [pageWidth, setPageWidth] = useState(0)
	const sticky_enabled = {
		position: "fixed",
		animation: "sticky-transition-show .2s forwards linear",
		width:"100%",
		right: "0",
		top: "0",
	};
	const sticky_disabled = {};

	const handleScroll = () => {
		if ((window.scrollY >= 2 * height) && document.body.scrollHeight >= 1500)
			setSticky(sticky_enabled);
		else
			setSticky(sticky_disabled);
	}

	// useEffect(() => {
		
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => window.removeEventListener('scroll', handleScroll)
	// }, []);

	return <>
	
		<nav>

			<div className="w-full bg-ground md:flex md:flex-row md:justify-between" style={sticky}>

				<Link href="/">
					<Image className="mx-auto sm:mx-0" src="/images/batarya_dunyasi_design.png" alt="" width={height} height={height} />
				</Link>
				<div className="w-full mt-2 mb-2 md:w-1/2 sm:my-auto p-2 sm:pr-5">
					<SearchBar />
				</div>

				<AccountButtons />

			</div>
			<div className="w-full bg-primary   flex flex-row justify-center align-center">
				<Menus />
			</div>

		</nav>

	</>
}

export {NavBar}