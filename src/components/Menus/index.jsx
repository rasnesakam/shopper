import Link from "next/link"

function Menus(){

	const menuItems = [
		{text:"Tüketici Pili Ve Batarya", href:""},
		{text:"Endüstriyel Pil", href:""},
		{text:"Şarj Aleti", href:""},
		{text:"Şarj Aleti Setleri", href:""},
		{text:"Powerbank", href:""},
		{text:"Fener Ve Işıldak", href:""},
		{text:"Pil Montaj Malzemesi", href:""},
		{text:"Pil Tasarım Grubu", href:""},
	]
	return <>
		<ul className="w-11/12 flex flex-row flex-wrap justify-center">
			{menuItems.map(menuItem => 
				<li className="m-3 text-ground text-center">
					<Link href={menuItem.href}>{menuItem.text}</Link>
				</li>
				)}			
		</ul>
	</>
}

export {Menus}