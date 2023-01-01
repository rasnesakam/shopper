import Head from 'next/head'
import {NavBar} from "../src/components/NavBar"
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function HelloWorld(){
	return <>
	
	<h1>BEN AYBUKE</h1>
	
	</>
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Batarya Dünyası</title>
        <meta name="description" content="Batarya Dünyası" />
		    <link rel="shortcut icon" href="/images/favicon.ico" />
		    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico" />
      </Head>

		<nav>
			<NavBar />
		</nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hoş Geldiniz!
        </h1>

		<HelloWorld/>

        <p className={styles.description}>
          Sayfamız şu anda yapım aşamasında. Size hizmet verebilmek için sabırsızlanıyoruz.
        </p>

        <div>
			<Image src="/images/batarya_dunyasi_design.png" alt="Vercel Logo" width={500} height={500} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://emakas.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' emakas '}
        </a>
      </footer>
    </div>
  )
}
