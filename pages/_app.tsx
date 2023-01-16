import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from './layout';
import * as dotenv from "dotenv";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	dotenv.config();
	return <Layout>
	  <Component {...pageProps} />
  	</Layout>
}
