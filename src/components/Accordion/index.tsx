import React, { createContext, useState } from "react";
import AccordionContext from "./AccordionContext";
import AccordionItem, { AccordionItemProps } from "./AccordionItem";

const Accordion = ({children}: {children: React.ReactElement<AccordionItemProps>[]}) => {
	
	const [visibleId, setVisibleId] = useState(children[0].props.id as string);
	
return <>
	<div className="w-8/12 border border-primary rounded-sm py-5 mt-5">	
		<AccordionContext.Provider value={{visibleId,setVisibleId}}>
			{children.map((child: React.ReactElement) => child)}	
		</AccordionContext.Provider>
	</div>
</>
};

export default Accordion;