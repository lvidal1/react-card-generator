import "../styles/globals.css";
import "flag-icons/css/flag-icons.min.css";
import "devicon/devicon.min.css";

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
