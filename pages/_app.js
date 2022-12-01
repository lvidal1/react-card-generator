import "../styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import store from "@store/index";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
