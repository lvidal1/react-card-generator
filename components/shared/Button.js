import React from "react";

import styles from "@styles/shared/Button.module.css";

const Button = ({ text, onClick }) => {
	return (
		<button className={styles["btn-success"]} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
