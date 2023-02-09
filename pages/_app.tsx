import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from './layout';
import { wrapper } from "../app/store"
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react"
import { store } from '../src/redux/store';
import { persistor } from '../src/redux/store';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	return <Provider store={store}>
		<PersistGate persistor={persistor}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</PersistGate>
	</Provider>
}
