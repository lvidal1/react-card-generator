import React, { createContext } from "react";

import styles from "@styles/shared/Modal.module.css";

const ModalContext = createContext({});

const Modal = (props) => {
	return (
		<ModalContext.Provider value={null}>
			<div className={styles.backdrop}>
				<div className={styles.container}>{props.children}</div>
			</div>
		</ModalContext.Provider>
	);
};

const Header = ({ children, onClose }) => {
	return (
		<div className={styles.header}>
			<div>
				<span className="font-bold text-gray-700 text-lg">
					{children}
				</span>
			</div>
			<div>
				<button onClick={onClose}>X</button>
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
