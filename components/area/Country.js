import { useEffect, useState } from "react";

import styles from "@styles/area/Country.module.css";
import classNames from "classnames";

const Country = ({ iso, onClick }) => {
	const [flag, setFlag] = useState("");
	const [name, setName] = useState("");

	useEffect(() => {
		if (iso) {
			setFlag(iso.toLowerCase());
			setName(iso.toUpperCase());
		}
	}, [iso]);

	return (
		iso && (
			<span className={classNames([styles.container, "cursor-pointer"])} data-testid="Country.Flag" onClick={onClick}>
				<span className={styles.name}>{name}</span>
				<span
					className={classNames("fi", `fi-${flag}`, styles.flag)}
				></span>
			</span>
		)
	);
};

export default Country;
