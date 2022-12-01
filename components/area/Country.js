import styles from "@styles/area/Country.module.css";
import classNames from "classnames";

const Country = ({ iso, classname }) => {
	return (
		<span className={styles.container}>
			<span className={styles.name}>PE</span>
			<span className={classNames("fi fi-pe", styles.flag)}></span>
		</span>
	);
};

export default Country;
