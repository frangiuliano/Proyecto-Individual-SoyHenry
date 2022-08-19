import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import img from "../../Images/LogoNeon.png"
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.div1}>
                <NavLink to='/videogames' className={styles.videogames}>
                    <p className={styles.span1}>ALL VIDEOGAMES</p>
                </NavLink>
                <NavLink to='/' >
                    <img src={img} alt="img not found" width="120px"/>
                </NavLink>
                <NavLink to='/create' className={styles.createVideogames}>
                    <p className={styles.span2}>CREATE VIDEOGAMES</p>
                </NavLink>         
            </div>
            <div className={styles.div2}>
                <SearchBar/> 
            </div>
        </header>
    )
}

export default NavBar;