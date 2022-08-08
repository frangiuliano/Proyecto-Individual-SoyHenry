import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <NavLink to='/videogames'>
                <button>Videogames</button>
            </NavLink>
            <NavLink to='/create'>
                <button>Create videogame</button>
            </NavLink>
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>
        </div>
    )
}

export default NavBar;