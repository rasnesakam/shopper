import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { ReactElement, useState } from "react";
import AccordionContext from "../AccordionContext";

export interface AccordionItemProps {
	id: string,
	title: string,
	children: React.ReactElement
}

export default function AccordionItem({id, title, children}: AccordionItemProps){

	return <>
		<AccordionContext.Consumer >
		{
			({visibleId, setVisibleId}) => <>		
				<div className={`shadow-md py-2 text-lg font-semibold px-3 flex justify-between rounded-md`}>
					{title}
					
					<button className="ml-5" onClick={
						() => {
							console.log(id)
							setVisibleId(id)
						}
					}><FontAwesomeIcon icon={visibleId !== id ? faAngleDown: faAngleUp}/></button>
				</div>
				<div className={`px-3 py-1 border border-t-0 border-x-0 border-primary rounded-md ${visibleId !== id ? "hidden" : ""}`}>
					{children}
				</div>
			</>
		}
		</AccordionContext.Consumer>
	</>
}