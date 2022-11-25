import React from "react";

import styles from "@styles/shared/Button.module.css";

const Button = ({ children, text, onClick, variant }) => {
	return (
		<button
			className={
				!variant ? styles["btn-success"] : styles[`btn-${variant}`]
			}
			onClick={onClick}
		>
			{children || text}
		</button>
	);
};

export default Button;
