import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import img from "../../../src/LogoNeon.png"
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.div1}>
                <NavLink to='/videogames' className={styles.videogames}>
                    <span>VIDEOGAMES</span>
                </NavLink>
                <NavLink to='/' >
                    <img src={img} alt="img not found" width="120px"/>
                </NavLink>
                <NavLink to='/create' className={styles.createVideogames}>
                    <span>CREATE VIDEOGAMES</span>
                </NavLink>         
            </div>
            <div className={styles.div2}>
                <SearchBar/> 
            </div>
        </div>
    )
}

export default NavBar;