import React from "react";

import Modal from "@components/shared/Modal";
import Input from "@components/shared/Input";
import Button from "../shared/Button";


const Information = () => {
    return <Modal>
        <Modal.Header>Add your personal info</Modal.Header>
        <Modal.Body>
            <Input id="Modal.Information.Fullname" label="Full name" />
            <Input id="Modal.Information.Birth" label="Birth day" />
        </Modal.Body>
        <Modal.Footer>
            <Button text="Save" onClick={() => { }} />
        </Modal.Footer>
    </Modal>;
}

export default Information;