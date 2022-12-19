import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTechnologies } from "@store/slices/user";
import { toggleTechnology } from "@store/slices/modal";

import Modal from "@components/shared/Modal";
import Checkbox from "@components/shared/Checkbox";
import Button from "@components/shared/Button";
import Input from "@components/shared/Input";

import styles from "@styles/modals/Technology.module.css";
import classNames from "classnames";

const Technology = () => {
	const dispatch = useDispatch();

	const MAX_ALLOWED = 6;

	const { technologies: xTechnologies } = useSelector((state) => state.user);

	const { byId, list } = useSelector((state) => state.technology);

	const [modalTechnology, setModalTechnology] = useState([]);
	const [searchTech, setSearchTech] = useState("");
	const technologyList = useSelector(({ technology }) => technology.list);

	useEffect(() => {
		if (xTechnologies.length) {
			setModalTechnology(xTechnologies);
		}
	}, []);

	const submit = () => {
		if (modalTechnology.length && !selectionIsFull()) {
			dispatch(setTechnologies(modalTechnology));
			close();
		}
	};

	const handleTechnologyChange = (e) => {
		if (e.target.checked === true) {
			setModalTechnology([...modalTechnology, e.target.value]);
		} else {
			const selectedAcc = modalTechnology.filter((a) => {
				if (a === e.target.value) return false;
				return true;
			});
			setModalTechnology([...selectedAcc]);
		}
	};

	const handleSearchTechChange = (e) => {
		setSearchTech(e.target.value);
	};

	const close = () => {
		dispatch(toggleTechnology(false));
	};

	const clear = () => {
		setModalTechnology([]);
	};

	const getRemainingOptions = () => MAX_ALLOWED - modalTechnology.length;

	const selectionIsFull = () => getRemainingOptions() < 0;

	const getMessage = (remaining) => {
		if (remaining < 0) {
			return `You just can select ${MAX_ALLOWED} options`;
		}
		if (remaining === 0) {
			return "Yei! Your stack is complete";
		}
		if (remaining === 1) {
			return "You have 1 more option";
		} else {
			return `You have ${remaining} more options`;
		}
	};

	const getVersion = (id) => (byId[id] ? byId[id].version : null);

	return (
		<Modal>
			<Modal.Header onClose={close}>Set your technology</Modal.Header>
			<Modal.Body>
				<Input
					id="Modal.Technology.Name"
					label="Search..."
					value={searchTech}
					onChange={handleSearchTechChange}
				/>
				<div className="flex mb-3 ">
					<div
						className={classNames(
							"font-bold grow",
							selectionIsFull() ? "text-primary-red" : ""
						)}
					>
						{getMessage(getRemainingOptions())}
					</div>
					<div
						className={classNames(
							"text-xs flex items-center",
							modalTechnology.length > 0 ? "" : "hidden"
						)}
						onClick={clear}
					>
						<span className="block">Clear x</span>
					</div>
				</div>
				<div className="flex justify-evenly my-5 flex-wrap">
					{modalTechnology.map((techId) => {
						const version = getVersion(techId);

						return (
							<span>
								<i
									className={classNames(
										`devicon-${techId}-${version} colored`,
										styles.logo
									)}
									title={techId}
								></i>
							</span>
						);
					})}
				</div>
				<hr />
				<div className="flex justify-evenly mt-5 flex-wrap overflow-y-scroll h-64">
					{technologyList
						.filter(({ id }) =>
							id.includes(searchTech.toLowerCase())
						)
						.map(({ id, name, version }) => (
							<span key={`Technology.Option.${id}`}>
								<Checkbox
									key={`Technology.${id}`}
									id={`Technology.${id}`}
									name="technology"
									onChange={handleTechnologyChange}
									value={id}
									title={name}
									className={styles.logoOption}
									checked={modalTechnology.includes(id)}
								>
									<i
										className={classNames(
											`devicon-${id}-${version} colored`,
											styles.logo
										)}
									></i>
								</Checkbox>
							</span>
						))}
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button text="Save" onClick={submit} />
			</Modal.Footer>
		</Modal>
	);
};

export default Technology;
