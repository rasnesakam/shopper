import { useState } from "react"

export default function Tabbed({className, children}: {className?: string, children: React.ReactElement | React.ReactElement[]}){
	const [currentEl, setCurrentEl] = useState(Array.isArray(children) ? children[0] : children);
	const activeLink = "text-ground bg-primary"
	return <>
		<div className={`mt-5 p-2 flex flex-row divide-x-2 border border-primary rounded-md ${className}`}>
			<div className="w-3/12">
				<ul className="w-full divide-y-2">
					{
						Array.isArray(children) ? children.map(
							(item, index) => <li className="w-full my-1" key={index}>
								<button className={`hover:text-ground hover:bg-primary w-full rounded-sm ${item == currentEl ? activeLink: ""}`}
									onClick={() => setCurrentEl(item)}>
									{item.props.name}
								</button>
							</li>
						) : <li className="w-full my-1" key={0}>
						<button className={`hover:text-ground hover:bg-primary w-full rounded-sm ${children == currentEl ? activeLink: ""}`}
							onClick={() => setCurrentEl(children)}>
							{children.props.name}
						</button>
					</li>
					}
				</ul>
			</div>
			<div className="p-2 w-9/12">
				{currentEl}
			</div>
		</div>
		<div></div>
	</>
}