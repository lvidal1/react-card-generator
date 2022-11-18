import React from "react";

import styles from "@styles/Toolbar.module.css"

const Toolbar = () => {
    return <div className={styles.toolbar}>
        <div className={styles.button} data-testid="Toolbar.Button.Information">
            <a href="#">1</a>
        </div>
        <div className={styles.button} data-testid="Toolbar.Button.Country">
            <a href="#">2</a>
        </div>
        <div className={styles.button} data-testid="Toolbar.Button.Photo">
            <a href="#">3</a>
        </div>
        <div className={styles.button} data-testid="Toolbar.Button.Position">
            <a href="#">4</a>
        </div>
        <div className={styles.button} data-testid="Toolbar.Button.Technologies">
            <a href="#">5</a>
        </div>
    </div>;
}

export default Toolbar;