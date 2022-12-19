import styles from "@styles/area/Birthday.module.css";
import classNames from "classnames";

const Birthday = ({ text, classname, onClick }) => {
	return (
		<div
			className={classNames([
				styles.container,
				classname,
				"cursor-pointer",
			])}
			onClick={onClick}
		>
			<div className={`${styles.ribbonDecorator}`}>
				<div className={styles.blocks}>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.name}>{text}</div>
			<div className={styles.ribbonDecorator}>
				<div className={styles.blocks}>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Birthday;
