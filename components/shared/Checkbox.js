import React from "react";

import styles from "@styles/shared/Checkbox.module.css";
import classNames from "classnames";

const Checkbox = ({
	id,
	label,
	name,
	onChange,
	value,
	title,
	children,
	className,
	checked,
}) => {
	return (
		<label htmlFor={id} className={classNames(styles.container, className)}>
			<input
				type="checkbox"
				id={id}
				name={name}
				onChange={onChange}
				value={value}
				title={title}
				checked={checked}
			/>
			<div className={styles.control}>{children}</div>
			<div className="text-sm w-14 text-center">{label}</div>
		</label>
	);
};

export default Checkbox;
