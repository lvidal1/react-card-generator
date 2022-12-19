import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePhotoChooser } from "@store/slices/modal";
import Image from "next/image";

import Modal from "@components/shared/Modal";
import Button from "@components/shared/Button";
import UploadControl from "@components/photo/UploadControl";
import CameraControl from "@components/photo/CameraControl";

const Chooser = () => {
	const dispatch = useDispatch();
	const raw = useSelector((state) => state.photo.raw);

	const close = () => {
		dispatch(togglePhotoChooser(false));
	};

	const submit = () => {
		dispatch(togglePhotoChooser(false));
	};

	return (
		<Modal>
			<Modal.Header onClose={close}>Choose</Modal.Header>
			<Modal.Body>
				<div className="flex justify-center space-x-8">
					<Button variant="link">
						<UploadControl>Upload a photo</UploadControl>
					</Button>
					<Button variant="link">
						<CameraControl>Take a picture</CameraControl>
					</Button>
				</div>
				<hr className="my-5" />
				{raw && (
					<Image
						src={raw}
						width="300"
						height="500"
						alt="Landscape picture"
						className="w-full"
					/>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button text="Looks good!" onClick={submit} />
			</Modal.Footer>
		</Modal>
	);
};

export default Chooser;
