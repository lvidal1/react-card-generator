import styles from "@styles/area/Birthday.module.css";

const Birthday = ({ text, classname }) => {
	return (
		<div className={`${styles.container} ${classname}`}>
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
