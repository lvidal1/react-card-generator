import React from "react";

import styles from "@styles/shared/Radio.module.css";

const Radio = ({ id, label, name }) => {
    return (
        <label htmlFor={id} className={styles.container}>
            <input type="radio" id={id} name={name} />
            <div className={styles.control}></div>
            <div className="text-sm">{label}</div>
        </label>
    );
};

export default Radio;
