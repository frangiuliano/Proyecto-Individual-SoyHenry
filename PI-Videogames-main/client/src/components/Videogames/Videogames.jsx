import React from 'react';
import {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {getVideogames, getGenres, filterVideogamesByGenres, filterCreated, orderByNameAndRating} from '../../actions'
import NavBar from '../NavBar/NavBar';
import Card from '../Videogame/Videogame.jsx'
import Paginated from '../Paginated/Paginated.jsx'

const Videogames = () => {

    const dispatch = useDispatch()
    const allVideogames = useSelector ((state) => state.videogames)
    const genres = useSelector ((state) => state.genres)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)
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

    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch(getVideogames())
    }

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

    return (
        <div>
            <NavBar/>
            <h1>VIDEOGAMES</h1>
            <button onClick={e => {handleOnClick(e)}}>
                Volver a cargar todos los videojuegos
            </button>
            <div>
                <select onChange={(e) => handleOrder(e)}>
                    <optgroup label='ALPHABETICAL ORDER'>
                        <option value= 'A - Z'>A - Z</option>
                        <option value= 'Z - A'>Z - A</option>
                    </optgroup>
                    <optgroup label='RATING'>
                        <option value = 'Higher - Lower'>Higher - Lower</option>
                        <option value = 'Lower - Higher'>Lower - Higher</option>
                    </optgroup>
                </select>
                <select onChange={(e) => handleFilterCreated(e)}>
                    <optgroup label='ALL'>
                        <option value='All'>All Videogames</option>
                    </optgroup>
                    <optgroup label='DATABASE'>
                        <option value='Created'>CREATED</option>
                    </optgroup>
                    <optgroup label='API'>
                        <option value='API'>API</option>
                    </optgroup>
                </select>
                <select onChange={(e)=> handleFilterGenres(e)}>
                    <optgroup label='GENRES'>
                        <option value='All'>All Videogames</option>
                        {genres?.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
                    </optgroup>
                </select>
            </div>
            <Paginated
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginated = {paginate}
                />
            {currentVideogames?.map((vg) => {
                return(
                    <div key={vg.id} >
                        <NavLink to={`/videogames/${vg.id}`}>
                            <Card  
                            name = {vg.name} 
                            background_image= {vg.background_image} 
                            genres={vg.genres} 
                            />
                        </NavLink>
                    </div>
                    )
                })}
        </div>
    )

}

export default Videogames;