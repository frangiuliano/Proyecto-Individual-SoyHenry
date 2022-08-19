import React from "react";
import styles from './Error4044.module.css'
import { NavLink } from "react-router-dom";

const Error4044 = () => {
    return (
        <div className={styles.img}>
            <div className={styles.div}>
                <NavLink to = "/">
                    <p className={styles.opcion}>START OVER</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Error4044;