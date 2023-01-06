import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
	faAngleLeft,
	faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Slide = ({items, timeout}: {items: Array<{imageUri:string, redirectTo: string}>, timeout?:number}) => {
	const [current, setCurrent] = useState(0);

	const stepNext = () => setCurrent( (current + 1) % items.length);
	const stepPrev = () => setCurrent((current + items.length - 1) % items.length);

	useEffect(() => {
		if (timeout != undefined){
			const interval = setInterval( stepNext, timeout);
		
			return () => clearInterval(interval)
		}
	}, [current, timeout]);
	
	return <>

		<div className="w-full h-[580px] static group">
			<Link href={items[Math.abs(current)].redirectTo}>
			<div style={{ backgroundImage: `url(${items[current].imageUri})`}}
				className="w-full h-full bg-center bg-cover duration-500"
			></div>
			</Link>
			<button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] text-2xl left-5 rounded-lg bg-primary/80 text-white cursor-pointer p-2"
				onClick={ stepPrev }>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] text-2xl right-5 rounded-lg bg-primary/80 text-white cursor-pointer p-2"
				onClick={ stepNext }>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	</>
};
