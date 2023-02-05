import { useState } from "react"

export default function Tabbed({children}: {children: React.ReactElement[]}){
	const [currentEl, setCurrentEl] = useState(children[0]);
	const activeLink = "text-ground bg-primary"
	return <>
		<div className="mt-5 p-2 w-10/12 flex flex-row divide-x-2 border border-primary rounded-md">
			<div className="w-3/12">
				<ul className="w-full divide-y-2">
					{
						children.map(
							(item, index) => <li className="w-full my-1" key={index}>
								<button className={`hover:text-ground hover:bg-primary w-full rounded-sm ${item == currentEl ? activeLink: ""}`}
									onClick={() => setCurrentEl(item)}>
									{item.props.name}
								</button>
							</li>
						)
					}
				</ul>
			</div>
			<div className="p-2">
				{currentEl}
			</div>
		</div>
		<div></div>
	</>
}