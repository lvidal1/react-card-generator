import React from "react";

import styles from "@styles/Area.module.css";

const Area = () => {
	return (
		<div className={styles.container}>
			<div className={styles.layer} id="layer" data-testid="Area.layer"></div>
		</div>
	);
};

export default Area;
