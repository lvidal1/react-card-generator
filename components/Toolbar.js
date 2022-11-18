import React from "react";

import styles from "@styles/Toolbar.module.css"

const Toolbar = () => {
    return <div className={styles.toolbar}>
        <div className={styles.button}>
            <a href="#">1</a>
        </div>
        <div className={styles.button}>
            <a href="#">2</a>
        </div>
        <div className={styles.button}>
            <a href="#">3</a>
        </div>
        <div className={styles.button}>
            <a href="#">4</a>
        </div>
        <div className={styles.button}>
            <a href="#">5</a>
        </div>
    </div>;
}

export default Toolbar;