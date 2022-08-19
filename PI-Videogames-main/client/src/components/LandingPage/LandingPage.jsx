import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./LandingPage.module.css"

const LandingPage = () => {
    return (
        <div className={styles.divGeneral}>
            <NavLink to = '/videogames'>
            <div className={styles.divCartel}>
                <h1 className={styles.h1}>E<span className={styles.span}>N</span>TER</h1>
            </div>
            </NavLink>         
        </div>
    )
}

export default LandingPage;