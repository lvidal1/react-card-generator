import React from "react";

import styles from "@styles/Area.module.css";
import { useSelector } from "react-redux";

import Fullname from "./area/Fullname";

const Area = () => {
	const { fullname } = useSelector((state) => state.user);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.layer} ${styles["bg-layer-purple"]}`}
				id="layer"
				data-testid="Area.layer"
			>
				<Fullname text={fullname} />
			</div>
		</div>
	);
};

export default Area;
