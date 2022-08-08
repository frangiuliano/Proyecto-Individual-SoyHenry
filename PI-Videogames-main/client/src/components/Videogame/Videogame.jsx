import React from "react";

const Card = ({background_image, name, genres}) => {

    return (
        <div>
            <h3>{name}</h3>
            <h5>{genres}</h5>
            <img src={background_image} alt="img not found" width= "200px" weight="250px"/>
        </div>
    )

}

export default Card;