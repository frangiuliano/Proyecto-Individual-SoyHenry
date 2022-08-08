import React from 'react';
import {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {getVideogames, getGenres} from '../../actions'
import NavBar from '../NavBar/NavBar';
import Card from '../Videogame/Videogame.jsx'

const Videogames = () => {

    const dispatch = useDispatch()
    const allVideogames = useSelector ((state) => state.videogames)
    const genres = useSelector ((state) => state.genres)

    useEffect (() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch])

    const handleOnClick = (e) => {
        e.preventdefault();
        dispatch(getVideogames())
    }

    return (
        <div>
            <NavBar/>
            <h1>VIDEOGAMES</h1>
            <button onClick={e => {handleOnClick(e)}}>
                Volver a cargar todos los personajes
            </button>
            <div>
                <select>
                    <optgroup label='ALPHABETICAL ORDER'>
                        <option value= 'A - Z'>A - Z</option>
                        <option value= 'Z - A'>Z - A</option>
                    </optgroup>
                    <optgroup label='RATING'>
                        <option value = 'Higher - Lower'>Higher - Lower</option>
                        <option value = 'Lower - Higher'>Lower - Higher</option>
                    </optgroup>
                </select>
                <select>
                    <optgroup label='DATABASE'>
                        <option value='Created'>CREATED</option>
                    </optgroup>
                    <optgroup label='API'>
                        <option value='API'>API</option>
                    </optgroup>
                    <optgroup label='GENRES'>
                        {genres[0]?.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
                    </optgroup>
                </select>
            </div>
            {allVideogames[0]?.map((vg) => {
                return(
                    <div>
                        <NavLink to={`/videogames/${vg.id}`}>
                            <Card  
                            key={vg.id} 
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