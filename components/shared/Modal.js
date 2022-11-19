import React from "react";

import styles from "@styles/shared/Modal.module.css"

const Modal = ({ children }) => {
    return <div className={styles.backdrop}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <i className="fas fa-exclamation-circle text-blue-500"></i>
                    <span className="font-bold text-gray-700 text-lg">Add your personal info</span>
                </div>
                <div>
                    <button><i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i></button>
                </div>
            </div>
            <div className={styles.body}>
                {children}
            </div>
            <div className={styles.footer}>
                <button class="bg-purple-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-purple-600 transition duration-150">Ok</button>
            </div>
        </div>
    </div>;
}

export default Modal;