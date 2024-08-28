import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAngleRight
  } from "@fortawesome/free-solid-svg-icons";
import {ChangeEvent, useState} from "react";
import { useRouter } from "next/router";
import {func} from "prop-types";

const SearchBar = () => {

    const [value, setValue] = useState("");
    const [isFocus, setFocus] = useState(false)
	const router = useRouter();
    const [suggestions, setSuggestions] = useState([]);

    function submit(event: any){
        event.preventDefault();
		router.push(`/arama/${encodeURIComponent(value)}`);
    }

    function handleInput(e: ChangeEvent<HTMLInputElement>){

        /*
        * Update suggestions
        * */
        setValue(e.target.value.toLowerCase())
    }

    return <>
    <div className="border-2 relative border-gray bg-ground rounded-full p-0 group">

        <form className="flex justify-between divide-x h-8 items-center "
              onFocus={e => setFocus(true) }
              onBlur={e => setFocus(false)}
              onSubmit={submit}>
            <div className="w-8 h-8">
                <button className="w-full h-full cursor-">
                    <FontAwesomeIcon icon={faSearch} className="" />
                </button>
            </div>
            <div className="w-full">
                <input type="text" placeholder="Ara" className="w-full h-8 px-1 focus:outline-none"
                       onChange={ handleInput } />
            </div>
            <div className="h-8 w-8">
                <button className="hover:bg-primary hover:text-white h-full w-full hover:rounded-r-full">
                <FontAwesomeIcon icon={faAngleRight} className="w-8 h-8" />
                </button>
            </div>
        </form>
        <div className={`${isFocus? "visible" : "hidden"} absolute w-full h-[520px] bg-ground border border-primary rounded-md`}>
            <div className="font-bold m-4"> Search results</div>
            <ul className="m-4">
                {suggestions.map((suggestion, index) => (<li key={index}>
                    suggestion
                </li>))}
            </ul>
        </div>
    </div>
    
    </>
};


export {SearchBar}