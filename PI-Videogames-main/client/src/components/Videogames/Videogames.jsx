import React from 'react';
import {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {getVideogames, getGenres, filterVideogamesByGenres, filterCreated, orderByNameAndRating} from '../../actions'
import NavBar from '../NavBar/NavBar';
import Card from '../Videogame/Videogame.jsx'
import Paginated from '../Paginated/Paginated.jsx'
import styles from './Videogames.module.css'
import img from "../../Images/Loading1.gif"
import Carrusel from '../Carrusel/Carrusel';


const Videogames = () => {

    const dispatch = useDispatch()
    const allVideogames = useSelector ((state) => state.videogames)
    const genres = useSelector ((state) => state.genres)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage] = useState(15)
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch])

    const handleFilterGenres = (e) => {
        e.preventDefault();
        dispatch(filterVideogamesByGenres(e.target.value))
    }

    const handleFilterCreated = (e) => {
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
    }

    const handleOrder = (e) => {
        e.preventDefault();
        dispatch(orderByNameAndRating(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getVideogames())
        setCurrentPage(1);
    }

    return (
        <div className={styles.fondo}>
            <NavBar/>
            {allVideogames.length > 5 ? <Carrusel/> : " "}
            <div className={styles.divFiltradoGeneral}>
                <div className={styles.divFiltrado}>
                    <select className={styles.orden} onChange={(e) => handleOrder(e)}>
                        <optgroup label='ALPHABETICAL ORDER'>
                            <option value= 'A - Z'>A - Z</option>
                            <option value= 'Z - A'>Z - A</option>
                        </optgroup>
                        <optgroup label='RATING'>
                            <option value = 'Higher - Lower'>Higher - Lower</option>
                            <option value = 'Lower - Higher'>Lower - Higher</option>
                        </optgroup>
                    </select>
                    <select className={styles.filtro1} onChange={(e) => handleFilterCreated(e)}>
                        <optgroup label='ALL'>
                            <option value='All'>ALL VIDEOGAMES</option>
                        </optgroup>
                        <optgroup label='DATABASE'>
                            <option value='Created'>CREATED</option>
                        </optgroup>
                        <optgroup label='API'>
                            <option value='API'>API</option>
                        </optgroup>
                    </select>
                    <select className={styles.filtro2} onChange={(e)=> handleFilterGenres(e)}>
                        <optgroup label='GENRES'>
                            <option value='All'>ALL GENRES</option>
                            {genres?.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className={styles.divReset}>
                <span className={styles.reset} onClick={(e) => handleClick(e)}>RESET</span>
            </div>
            {allVideogames[0] === 'No existen juegos con ese nombre'? <h1>GAME NOT FOUND</h1> : 
            <div>
            <Paginated
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginated = {paginate}
                />
            {allVideogames.length? 
                <div className={styles.grid}>
                {currentVideogames?.map((vg) => {
                    return(
                        <div key={vg.id} >
                            <NavLink to={`/videogames/${vg.id}`}>
                                <Card  
                                name = {vg.name} 
                                background_image= {vg.background_image} 
                                genres={vg.genres} 
                                rating={vg.rating}
                                />
                            </NavLink>
                        </div>
                        )
                    })}
            </div>
            : 
            <div className={styles.divLoading}>
                <img className={styles.loading} src={img} alt="img not found" />
            </div>
            }
            <Paginated
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginated = {paginate}
                />
            </div>
            }
            <div className={styles.divSaludo}>
                <p className={styles.saludo}>PI VIDEOGAMES BY FRANCO GIULIANO</p>
            </div>
            
        </div>
    )

}

export default Videogames;