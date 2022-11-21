import React from "react";

import styles from "@styles/shared/Checkbox.module.css";

const Checkbox = ({ id, label, name }) => {
	return (
		<label htmlFor={id} className={styles.container}>
			<input type="checkbox" id={id} name={name} />
			<div className={styles.control}></div>
			<div className="text-sm">{label}</div>
		</label>
	);
};

export default Checkbox;
