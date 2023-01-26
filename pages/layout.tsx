import Head from 'next/head'
import { NavBar } from "../src/components/NavBar"
import styles from '../styles/Home.module.css'

export default function Layout({children}: any){
  
  return <div className="bg-ground">
    <Head>
      <title>Batarya Dünyası</title>
      <meta name="description" content="Batarya Dünyası" />
		  <link rel="shortcut icon" href="/images/favicon.ico" />
		  <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico" />
    </Head>
	<NavBar />

    <main className="flex flex-col items-center min-h-screen" >
      {children}
    </main>

    <footer className={styles.footer}>
      <a
        href="https://emakas.net"
        target="_blank"
        rel="noopener noreferrer">
          Powered by{' emakas '}
        </a>
    </footer>
    </div>
}
