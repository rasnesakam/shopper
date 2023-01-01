import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAngleRight
  } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = () => {

    const [value, setValue] = useState("");

    function submit(event){
        event.preventDefault();
        console.log(event);
        alert(value);
    }

    return <>
    <div className="border-2 border-gray rounded-full p-1 ">

        <form className="flex justify-between divide-x" onSubmit={submit}>

            <div className="">
                <FontAwesomeIcon icon={faSearch} className="px-2" />
            </div>
            <div className="w-full">
                <input type="text" placeholder="Ara" className="w-full px-1 focus:outline-none" onChange={e => setValue(e.target.value)} />
            </div>
            <div className="">
                <button className="hover:bg-primary hover:text-white hover:rounded-r-full">
                <FontAwesomeIcon icon={faAngleRight} className="px-2" />
                </button>
            </div>

        </form>
    </div>
    
    </>
};


export {SearchBar}