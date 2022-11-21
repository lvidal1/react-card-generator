import React from "react";

import Modal from "@components/shared/Modal";
import Button from "@components/shared/Button";

const Country = () => {
	return (
		<Modal>
			<Modal.Header>Set your country</Modal.Header>
			<Modal.Body></Modal.Body>
			<Modal.Footer>
				<Button text="Save" />
			</Modal.Footer>
		</Modal>
	);
};

export default Country;
