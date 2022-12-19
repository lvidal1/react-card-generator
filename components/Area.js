import React from "react";

import styles from "@styles/Area.module.css";
import { useDispatch, useSelector } from "react-redux";

import Fullname from "./area/Fullname";
import Birthday from "./area/Birthday";
import Country from "./area/Country";
import Technologies from "./area/Technologies";
import Position from "./area/Position";

import {
	togglePersonalInfo,
	togglePosition,
	toggleCountry,
	toggleTechnology,
} from "@store/slices/modal";
import classNames from "classnames";

const Area = () => {
	const { fullname, birth, country, technologies, position } = useSelector(
		(state) => state.user
	);

	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			<div
				className={classNames(
					styles.layer,
					styles["bg-layer-purple"],
					styles["bg-layer-color-3"],
					"relative"
				)}
				id="layer"
				data-testid="Area.layer"
			>
				<div className=" h-full w-full absolute top-0 left-0 z-0">
					<div className="relative mt-24 h-52 w-40 mx-auto border-2 border-white z-0"></div>
				</div>
				<div className="flex items-stretch flex-col h-full z-10 relative">
					<div className="flex-1 w-full flex justify-between">
						<div className="">
							<Technologies
								technologies={technologies}
								classname="mt-1.5"
								onClick={() => dispatch(toggleTechnology(true))}
							/>
						</div>
						<div className="flex flex-col items-end space-y-2">
							<Country
								iso={country}
								classname="mt-1.5"
								onClick={() => dispatch(toggleCountry(true))}
							/>

							<Position
								position={position}
								onClick={() => dispatch(togglePosition(true))}
							/>
						</div>
					</div>
					<div className="h-72"></div>
					<div className="flex-1 w-full">
						<div className="flex flex-col ">
							<Fullname
								text={fullname}
								onClick={() =>
									dispatch(togglePersonalInfo(true))
								}
							/>
							<Birthday
								text={birth}
								classname="mt-1.5"
								onClick={() =>
									dispatch(togglePersonalInfo(true))
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Area;
