import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {cleanFilter, searchById} from '../../actions/index'
import styles from './VideogameDetail.module.css'

const Videogame = () => {
    
    const dispatch = useDispatch()
    const vgDetail = useSelector ((state) => state.videogameDetail)
    const {id} = useParams()

    useEffect (() => {
        dispatch(searchById(id))
        return () => {
            dispatch(cleanFilter())
        }
    }, [dispatch, id])

    console.log(vgDetail)

    return (
        <div>
            <div className={styles.navbar}>
                <NavLink to="/videogames" className={styles.back}>
                    <span>BACK TO HOME</span>
                </NavLink>
            </div>
            {vgDetail?
            <div className={styles.divGeneral}>
                <div className={styles.divImg}>
                    <img className={styles.img} src={vgDetail.background_image} alt="img not fouuuuund" width= "200px" weight="250px"/>         
                </div>
                <div className={styles.divGeneralInfo}>
                    <div className={styles.divTitleGenres}>
                        <p className={styles.title}>{vgDetail.name}</p>
                        {vgDetail.genres?.map((e, index) => <p key={index} className={styles.genres}>{e + " "}</p> )} 
                    </div>
                    <div className={styles.labelDisponible}>
                        <p>Available in</p>
                        {typeof vgDetail.platforms === 'string' ? vgDetail.platforms : vgDetail.platforms?.map((e, index) => <p key={index} className={styles.platforms}>{e + " "}</p>)}
                    </div>
                    <div>
                        <p className={styles.description}>{vgDetail.description_raw ? vgDetail.description_raw : vgDetail.description}</p>
                    </div>
                    <div className={styles.divRatingReleased}>
                        <p className={styles.released}>Released: {vgDetail.released ? vgDetail.released : vgDetail.release_date}</p>
                        <p className={styles.rating}>★ {vgDetail.rating}</p>
                    </div>
                </div>
            </div>
            : <h1>CARGANDO...</h1>
            }
        </div>
    )
}

export default Videogame;