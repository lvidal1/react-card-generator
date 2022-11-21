import React from "react";

import styles from "@styles/shared/Radio.module.css";

const Radio = ({ id, label, name, onChange, value }) => {
	return (
		<label htmlFor={id} className={styles.container}>
			<input
				id={id}
				name={name}
				onChange={onChange}
				type="radio"
				value={value}
			/>
			<div className={styles.control}></div>
			<div className="text-sm w-14 text-center">{label}</div>
		</label>
	);
};

export default Radio;
