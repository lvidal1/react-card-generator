import { useSelector } from "react-redux";
import classNames from "classnames";

import styles from "@styles/area/Technologies.module.css";

const Technologies = ({ technologies, onClick }) => {
	const { byId, list } = useSelector((state) => state.technology);

	const getVersion = (id) => (byId[id] ? byId[id].version : null);

	const getLogo = (id, version) => {
		return version ? (
			<i
				key={id}
				className={classNames(
					`devicon-${id}-${version} colored`,
					styles.logo
				)}
			></i>
		) : (
			""
		);
	};

	return (
		<div
			className={classNames([
				styles.container,
				"cursor-pointer opacity-80",
			])}
			onClick={onClick}
		>
			{list.length > 0 &&
				technologies.map((id) => {
					const logoVersion = getVersion(id);
					return getLogo(id, logoVersion);
				})}
		</div>
	);
};

export default Technologies;
