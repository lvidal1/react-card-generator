import styles from "@styles/area/Fullname.module.css";
import classNames from "classnames";

const Fullname = ({ text, onClick }) => {
	return (
		<div
			className={classNames([styles.container, "cursor-pointer"])}
			onClick={onClick}
		>
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
