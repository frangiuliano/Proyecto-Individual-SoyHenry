import React from 'react';
import {NavLink} from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Bienvenidos al PI de Videogames de Fran!</h1>
            <NavLink to = '/videogames'>
                <button>Ingresar</button>
            </NavLink>
        </div>
    )
}

export default LandingPage;