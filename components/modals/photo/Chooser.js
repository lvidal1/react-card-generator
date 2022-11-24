import React from "react";
import { useDispatch } from "react-redux";
import { togglePhotoChooser } from "@store/slices/modal";

import Modal from "@components/shared/Modal";
import Button from "@components/shared/Button";

const Chooser = () => {
	const dispatch = useDispatch();

	const close = () => {
		dispatch(togglePhotoChooser(false));
	};

	return (
		<Modal>
			<Modal.Header onClose={close}>Choose</Modal.Header>
			<Modal.Body>
				<div className="flex justify-center space-x-8">
					<Button text="Upload a photo" variant="link" />
					<Button text="Take a picture" variant="link" />
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default Chooser;
