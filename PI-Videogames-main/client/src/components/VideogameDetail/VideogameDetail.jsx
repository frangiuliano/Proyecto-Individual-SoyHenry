import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {searchById} from '../../actions/index'

const Videogame = () => {
    
    const dispatch = useDispatch()
    const vgDetail = useSelector ((state) => state.videogameDetail)
    const {id} = useParams()

    useEffect (() => {
        dispatch(searchById(id))
    }, [dispatch, id])

    console.log(vgDetail)

    return (
        <div>
            <h1>{vgDetail.name}</h1>,
            <h2>{vgDetail.description_raw ? vgDetail.description_raw : vgDetail.description}</h2>,
            <h3>{vgDetail.genres}</h3>,
            <h3>{vgDetail.released ? vgDetail.released : vgDetail.release_date}</h3>,
            <h4>{vgDetail.rating}</h4>,
            <h5>{vgDetail.platforms}</h5>,
            <img src={vgDetail.background_image} alt="img not fouuuuund" width= "200px" weight="250px"/> 
        </div>
    )
}

export default Videogame;