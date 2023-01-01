import Image from 'next/image'
import { useState } from 'react';
import {
	faAngleLeft,
	faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Slide = (props) => {
	const [current, setCurrent] = useState(0);
	return <>

		<div className="w-full h-[580px] relative group">
			<div style={{ backgroundImage: `url(${props.items[Math.abs(current)]})`}}
				className="w-full h-full bg-center bg-cover duration-500"
			></div>
			<button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-lg bg-primary/80 text-white cursor-pointer p-2"
				onClick={() => setCurrent((current - 1) % props.items.length) }>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-lg bg-primary/80 text-white cursor-pointer p-2"
				onClick={ () => setCurrent( (current + 1) % props.items.length) }>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	</>
};
