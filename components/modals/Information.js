import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPersonalInformation } from "@store/slices/user";
import { togglePersonalInfo } from "@store/slices/modal";

import Modal from "@components/shared/Modal";
import Input from "@components/shared/Input";
import Button from "@components/shared/Button";

const Information = () => {
	const dispatch = useDispatch();

	const [fullname, setFullname] = useState("");
	const [birth, setBirth] = useState("");

	const submit = () => {
		if (fullname.length && birth.length) {
			dispatch(setPersonalInformation({ fullname, birth }));
			close();
		}
	};

	const close = () => {
		dispatch(togglePersonalInfo(false));
	};

	function handleFullNameChange(e) {
		setFullname(e.target.value);
	}

	function handleBirthChange(e) {
		setBirth(e.target.value);
	}

	return (
		<Modal>
			<Modal.Header onClose={close}>Add your personal info</Modal.Header>
			<Modal.Body>
				<Input
					id="Modal.Information.Fullname"
					label="Full name"
					value={fullname}
					onChange={handleFullNameChange}
				/>
				<Input
					id="Modal.Information.Birth"
					label="Birth day"
					value={birth}
					onChange={handleBirthChange}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button text="Save" onClick={submit} />
			</Modal.Footer>
		</Modal>
	);
};

export default Information;
