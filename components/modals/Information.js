import React from "react";

import Modal from "@components/shared/Modal";
import Input from "@components/shared/Input";


const Information = () => {
    return <Modal>
        <Input id="Modal.Information.Fullname" label="Full name" />
        <Input id="Modal.Information.Birth" label="Birth day" />
    </Modal>;
}

export default Information;