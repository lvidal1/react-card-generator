import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTechnologies } from "@store/slices/user";
import { toggleTechnology } from "@store/slices/modal";
import { setTechnologyList } from "@store/slices/technology";

import Modal from "@components/shared/Modal";
import Checkbox from "@components/shared/Checkbox";
import Button from "@components/shared/Button";
import { technologies } from "data";

const Technology = () => {
	const dispatch = useDispatch();

	const [modalTechnology, setModalTechnology] = useState([]);
	const technologyList = useSelector(({ technology }) => technology.list);

	useEffect(() => {
		dispatch(setTechnologyList(technologies));
	}, []);

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

	const close = () => {
		dispatch(toggleTechnology(false));
	};

	return (
		<Modal>
			<Modal.Header onClose={close}>Set your technology</Modal.Header>
			<Modal.Body>
				<div className="flex justify-evenly mt-5">
					{technologyList.map(({ id, name }) => (
						<Checkbox
							key={`Technology.${id}`}
							id={`Technology.${id}`}
							name="technology"
							onChange={handleTechnologyChange}
							value={id}
						/>
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
