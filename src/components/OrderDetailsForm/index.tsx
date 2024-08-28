import {OrderForm} from "../../types/OrderForm";

const OrderDetailsForm = ({ form }: {form: OrderForm[] | undefined}) => {

    return <>
        {form?.map(element => (<>
            {element.type === "choice-single" ? (<>
                <select>
                    {element.optionSet.map(set => <>
                        <option key={set.key} value={set.key}>
                            {set.value}
                        </option>
                    </>)}
                </select>
            </>) : <></>}
        </>))}
    </>
}

export { OrderDetailsForm }