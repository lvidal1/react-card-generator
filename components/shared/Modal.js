import React, { createContext } from "react";

import styles from "@styles/shared/Modal.module.css";

const ModalContext = createContext({});

const Modal = (props) => {
	return (
		<ModalContext.Provider>
			<div className={styles.backdrop}>
				<div className={styles.container}>{props.children}</div>
			</div>
		</ModalContext.Provider>
	);
};

const Header = ({ children }) => {
	return (
		<div className={styles.header}>
			<div>
				<i className="fas fa-exclamation-circle text-blue-500"></i>
				<span className="font-bold text-gray-700 text-lg">{children}</span>
			</div>
			<div>
				<button>
					<i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i>
				</button>
			</div>
		</div>
	);
};

const Body = ({ children }) => {
	return <div className={styles.body}>{children}</div>;
};

const Footer = ({ children }) => {
	return <div className={styles.footer}>{children}</div>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
