import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import {
	faAngleLeft,
	faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Slide = ({items, timeout}: {items: Array<{imageUri:string, redirectTo: string}>, timeout:number}) => {
	const [current, setCurrent] = useState(0);
	//TODO: Promise veya benzeri yapıda timeout ile zaman ayarlı slayt kaydırma işlemi yapılmalıdır
	return <>

		<div className="w-full h-[580px] relative group">
			<Link href={items[Math.abs(current)].redirectTo} style={{ backgroundImage: `url(${items[Math.abs(current)].imageUri})`}}
				className="w-full h-full bg-center bg-cover duration-500"
			></Link>
			<button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] text-2xl left-5 rounded-lg bg-primary/80 text-white cursor-pointer p-2"
				onClick={() => setCurrent((current - 1) % items.length) }>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] text-2xl right-5 rounded-lg bg-primary/80 text-white cursor-pointer p-2"
				onClick={ () => setCurrent( (current + 1) % items.length) }>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	</>
};
