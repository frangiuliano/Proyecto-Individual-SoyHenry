import React from "react";
// import {videogamesPerPage, allVideogames, paginate} from '../Videogames/Videogames.jsx'

const Paginated = ({videogamesPerPage, allVideogames, paginated}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers?.map(number => (
                    <li key={number}>
                         <button onClick={() => paginated(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginated;