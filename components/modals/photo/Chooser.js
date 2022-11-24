import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { togglePhotoChooser } from "@store/slices/modal";

import Modal from "@components/shared/Modal";

const Chooser = () => {
    const dispatch = useDispatch();

    const close = () => {
        dispatch(togglePhotoChooser(false));
    };

    return (
        <Modal>
            <Modal.Header onClose={close}>Choose</Modal.Header>
            <Modal.Body>

            </Modal.Body>
        </Modal>
    );
};

export default Chooser;
