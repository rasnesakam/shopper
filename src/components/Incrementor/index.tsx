import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Dispatch, SetStateAction} from "react";

type Props = {
    value: number,
    onChange: Dispatch<SetStateAction<number>>,
    onSubmit: () => void
}
// decrement: setAmount(Math.max(1, amount - 1))

const Incrementor = ({value, onChange, onSubmit}: Props ) => {

    return <>
        <div className="w-1/2 h-[48px] flex items-center divide-x-2 border border-gray-400 rounded-sm">
            <button className="text-2xl  h-full font-bold w-3/12 hover:bg-primary hover:text-white"
                    onClick={() => onChange(value - 1)}>
                <FontAwesomeIcon icon={faMinus}/>
            </button>
            <div className="text-2xl text-center w-6/12">{value}</div>
            <button className="text-2xl h-full font-bold w-3/12 hover:bg-primary hover:text-white"
                    onClick={() => onChange(value + 1)}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
        <button className="w-1/2 h-[48px] bg-primary text-center text-white"
                onClick={onSubmit}>Sepete Ekle
        </button>
    </>
}

export { Incrementor };