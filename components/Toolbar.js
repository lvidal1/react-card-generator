import React from "react";
import { useDispatch } from "react-redux";
import {
	togglePersonalInfo,
	togglePosition,
	toggleCountry,
	toggleTechnology,
} from "@store/slices/modal";

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
			<div
				className={styles.button}
				data-testid="Toolbar.Button.Country"
				onClick={() => dispatch(toggleCountry(true))}
			>
				<a href="#">2</a>
			</div>
			<div className={styles.button} data-testid="Toolbar.Button.Photo">
				<a href="#">3</a>
			</div>
			<div
				className={styles.button}
				data-testid="Toolbar.Button.Position"
				onClick={() => dispatch(togglePosition(true))}
			>
				<a href="#">4</a>
			</div>
			<div
				className={styles.button}
				data-testid="Toolbar.Button.Technologies"
				onClick={() => dispatch(toggleTechnology(true))}
			>
				<a href="#">5</a>
			</div>
		</div>
	);
};

export default Toolbar;
