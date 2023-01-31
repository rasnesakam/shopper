import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from './layout';
import { wrapper } from "../app/store"

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
	return <Layout>
	  <Component {...pageProps} />
  	</Layout>
}

export default wrapper.withRedux(App);