import React from "react";
import { useDispatch } from "react-redux";
import { togglePersonalInfo } from "@store/slices/modal";

import styles from "@styles/Toolbar.module.css";

const Toolbar = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.toolbar}>
			<div
				className={styles.button}
				data-testid="Toolbar.Button.Information"
				onClick={() => dispatch(togglePersonalInfo(true))}
			>
				<a href="#">1</a>
			</div>
			<div className={styles.button} data-testid="Toolbar.Button.Country">
				<a href="#">2</a>
			</div>
			<div className={styles.button} data-testid="Toolbar.Button.Photo">
				<a href="#">3</a>
			</div>
			<div
				className={styles.button}
				data-testid="Toolbar.Button.Position"
			>
				<a href="#">4</a>
			</div>
			<div
				className={styles.button}
				data-testid="Toolbar.Button.Technologies"
			>
				<a href="#">5</a>
			</div>
		</div>
	);
};

export default Toolbar;
