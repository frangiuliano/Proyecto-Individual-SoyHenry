import React from "react";
import styles from './Error404.module.css'
import { NavLink } from "react-router-dom";

const Error404 = () => {
    return (
        <div className={styles.img}>
            <div className={styles.div}>
                <NavLink to = '/error'>
                    <p className={styles.opcion1}>YES</p>
                </NavLink>
                <NavLink to="/videogames">
                    <p className={styles.opcion2}>NO</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Error404;