import React from "react";

import styles from "@styles/shared/Radio.module.css";
import classNames from "classnames";

const Radio = ({
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
		<label
			htmlFor={id}
			className={classNames(styles.container, className)}
			title={title}
		>
			<input
				id={id}
				name={name}
				onChange={onChange}
				type="radio"
				value={value}
				checked={checked}
			/>
			<div className={styles.control}>{children}</div>
			<div className="text-sm w-14 text-center">{label}</div>
		</label>
	);
};

export default Radio;
