import React from "react";
import styles from "./Paginated.module.css"
// import {videogamesPerPage, allVideogames, paginate} from '../Videogames/Videogames.jsx'

const Paginated = ({videogamesPerPage, allVideogames, paginated}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <div>
                <ul className={styles.paginadoForma}>
                    {pageNumbers?.map(number => (
                            <li className={styles.paginadoForma1} key={number}>
                                <div className={styles.button} onClick={() => paginated(number)}>{number}</div>
                            </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Paginated;