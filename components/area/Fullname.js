import styles from "@styles/area/Fullname.module.css";

const Fullname = ({ text }) => {
	return (
		<div className={styles.container}>
			<div className={`${styles.ribbonDecorator}`}>
				<div className={styles.blocks}>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
				</div>
			</div>
			<div className={styles.name}>{text}</div>
			<div className={styles.ribbonDecorator}>
				<div className={styles.blocks}>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div className={styles.block}></div>
					<div></div>
					<div></div>
					<div></div>
					<div className={styles.block}></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Fullname;
