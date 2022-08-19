import React from "react";
import styles from './Videogame.module.css'

const Card = ({background_image, name, genres, rating}) => {

    let genresCheck = typeof genres[0] === 'object'? genres.map(e=>e.name) : genres

    return (
        <div className={styles.card}>
            <div className={styles.divImg}>
                <img className={styles.img} src={background_image} alt="img not found"/>    
            </div>
            <div className={styles.divInfo}>
                <p className={styles.name}>{name}</p>
            </div>
            <div className={styles.divInfo2}>
                {genresCheck?.map((e, index) => <p key={index} className={styles.genre}>{e + " "}</p>)} 
            </div>
            <div>
                <p className={styles.rating}> ★ {rating}</p>
            </div>
        </div>
    )

}

export default Card;