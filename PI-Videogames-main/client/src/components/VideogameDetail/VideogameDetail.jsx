import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {searchById} from '../../actions/index'

const Videogame = (props) => {
    
    
    const vgDetail = useSelector ((state) => state.videogameDetail)
    console.log(vgDetail)
    const {id} = props.match.params
    

    useEffect (() => {
        searchById(id)
    }, [id])
    
    return (
        <div>
            <h1>{vgDetail.name}</h1>,
            <h2>{vgDetail.description}</h2>,
            <h3>{vgDetail.genres}</h3>,
            <h3>{vgDetail.release_date}</h3>,
            <h4>{vgDetail.rating}</h4>,
            <h5>{vgDetail.platforms}</h5>,
            <img src={vgDetail.background_image} alt="img not fouuuuund" width= "200px" weight="250px"/> 
        </div>
    )
}

export default Videogame;