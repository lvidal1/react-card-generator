import React, { useState } from "react";

import Modal from "@components/shared/Modal";
import Input from "@components/shared/Input";
import Button from "@components/shared/Button";

const Information = () => {
	const [fullName, setFullName] = useState("");
	const [birth, setBirth] = useState("");

	const onSubmit = () => {
		if (fullName.length && birth.length) {
			console.log(fullName, birth);
		}
	};

	function handleFullNameChange(e) {
		setFullName(e.target.value);
	}

	function handleBirthChange(e) {
		setBirth(e.target.value);
	}

	return (
		<Modal>
			<Modal.Header>Add your personal info</Modal.Header>
			<Modal.Body>
				<Input
					id="Modal.Information.Fullname"
					label="Full name"
					value={fullName}
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
				<Button text="Save" onClick={onSubmit} />
			</Modal.Footer>
		</Modal>
	);
};

export default Information;
