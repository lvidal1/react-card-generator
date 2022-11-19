import React from "react";

import styles from "@styles/shared/Input.module.css";

const Input = ({ label, error, placeholder, id }) => {
	return (
		<div className={styles.control}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<input
				className={styles.input}
				id={id}
				type="text"
				placeholder={placeholder}
			/>
			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
};

export default Input;
