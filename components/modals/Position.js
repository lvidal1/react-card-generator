import React from "react";

import Modal from "@components/shared/Modal";
import Checkbox from "@components/shared/Checkbox";
import Button from "@components/shared/Button";

const Position = () => {
	return (
		<Modal>
			<Modal.Header>Set your position</Modal.Header>
			<Modal.Body>
				<div className="flex justify-evenly mt-5">
					<Checkbox id="Position.Position1" label="Position 1" />
					<Checkbox id="Position.Position2" label="Position 2" />
					<Checkbox id="Position.Position3" label="Position 3" />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button text="Save" />
			</Modal.Footer>
		</Modal>
	);
};

export default Position;
