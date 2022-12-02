import React, { useState } from "react";
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

	const [modalTechnology, setModalTechnology] = useState([]);
	const [searchTech, setSearchTech] = useState("");
	const technologyList = useSelector(({ technology }) => technology.list);

	const submit = () => {
		if (modalTechnology.length) {
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
