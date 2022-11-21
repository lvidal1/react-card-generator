import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "@store/slices/user";
import { togglePosition } from "@store/slices/modal";
import { setPositionList } from "@store/slices/position";

import Modal from "@components/shared/Modal";
import Radio from "@components/shared/Radio";
import Button from "@components/shared/Button";
import { positions } from "../../data";

const Position = () => {
	const dispatch = useDispatch();

	const [modalPosition, setModalPosition] = useState("");
	const positionList = useSelector(({ position }) => position.list);

	useEffect(() => {
		dispatch(setPositionList(positions));
	}, [dispatch]);

	const submit = () => {
		if (modalPosition.length) {
			dispatch(setPosition(modalPosition));
			close();
		}
	};

	const handlePositionChange = (e) => {
		setModalPosition(e.target.value);
	};

	const close = () => {
		dispatch(togglePosition(false));
	};

	return (
		<Modal>
			<Modal.Header onClose={close}>Set your position</Modal.Header>
			<Modal.Body>
				<div className="flex justify-evenly mt-5">
					{positionList.map(({ id, name }) => (
						<Radio
							key={`Position.${id}`}
							id={`Position.${id}`}
							label={name}
							name="position"
							onChange={handlePositionChange}
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

export default Position;
