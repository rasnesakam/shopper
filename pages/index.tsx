import Head from 'next/head'
import {NavBar} from "../src/components/NavBar"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Slide} from '../src/components/Slide'


function HelloWorld(){
	return <>
	
	<h1>BEN AYBUKE</h1>
	
	</>
}

export default function Home() {
  return (
    <div>
	      <Slide items={[
			    "/images/batarya_dunyasi_design.png",
			    "/images/logo_bd_180x180.png",
		      ]}/>

        <h1 className={styles.title}>
          Hoş Geldiniz!
        </h1>

        <p className={styles.description}>
          Sayfamız şu anda yapım aşamasında. Size hizmet verebilmek için sabırsızlanıyoruz.
        </p>
        <div>
			    <Image src="/images/batarya_dunyasi_design.png" alt="Vercel Logo" width={500} height={500} />
        </div>

    </div>
  )
}
