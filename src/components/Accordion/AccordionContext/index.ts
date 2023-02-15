import React, { createContext, Dispatch } from "react";

const defaultValue: {
	visibleId: string,
	setVisibleId: React.Dispatch<React.SetStateAction<string>>
} = {
	visibleId: "",
	setVisibleId: () => {}
}

const AccordionContext = createContext(defaultValue);

export default AccordionContext;
