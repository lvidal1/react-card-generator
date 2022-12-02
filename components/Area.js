import React from "react";

import styles from "@styles/Area.module.css";
import { useSelector } from "react-redux";

import Fullname from "./area/Fullname";
import Birthday from "./area/Birthday";
import Country from "./area/Country";
import Technologies from "./area/Technologies";

const Area = () => {
	const { fullname, birth, country, technologies } = useSelector(
		(state) => state.user
	);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.layer} ${styles["bg-layer-purple"]}`}
				id="layer"
				data-testid="Area.layer"
			>
				<Fullname text={fullname} />
				<Birthday text={birth} classname="mt-1.5" />
				<Country iso={country} classname="mt-1.5" />
				<Technologies technologies={technologies} classname="mt-1.5" />
			</div>
		</div>
	);
};

export default Area;
