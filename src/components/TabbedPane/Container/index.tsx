import { useState } from "react"

export default function Tabbed({children}: {children: React.ReactElement[]}){
	const [currentEl, setCurrentEl] = useState(children[0]);
	return <>
		<div>
			<ul>
				{children.map((item, index) => <li key={index}><button onClick={() => setCurrentEl(item)}>{item.props.name}</button></li>)}
			</ul>
			<div>
				{currentEl}
			</div>
		</div>
		<div></div>
	</>
}