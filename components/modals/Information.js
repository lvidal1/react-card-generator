import React from "react";

import Modal from "@components/shared/Modal";
import Input from "@components/shared/Input";


const Information = () => {
    return <Modal>
        <Modal.Header>Add your personal info</Modal.Header>
        <Modal.Body>
            <Input id="Modal.Information.Fullname" label="Full name" />
            <Input id="Modal.Information.Birth" label="Birth day" />
        </Modal.Body>
        <Modal.Footer>
            <button class="bg-purple-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-purple-600 transition duration-150">OK</button>
        </Modal.Footer>
    </Modal>;
}

export default Information;