import React from "react";
import {searchById} from '../../actions/index'

const Videogame = (background_image, name, genres, description, release_date, rating, platforms) => {


    
    return (
        <div>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h3>{genres}</h3>
            <h3>{release_date}</h3>
            <h4>{rating}</h4>
            <h5>{platforms}</h5>
            <img src={background_image} alt="img not found" width= "200px" weight="250px"/>
        </div>
    )
}

export default VideogameDetail;