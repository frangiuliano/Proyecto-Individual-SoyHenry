import React, {useState, useEffect} from "react";
import {NavLink, useHistory} from 'react-router-dom';
import {postVideogame, getGenres} from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";

const validate = (input) => {
    let errors = []
    if (!input.name){
        errors.name = 'Name is required';
    } else if (!input.description) {
        errors.description = 'Description is required'
    } else if (!input.platforms) {
        errors.platforms = 'At least one platform is required'
    } 

    return errors;
} 


const VideogameCreate = () => {
    
    const dispatch = useDispatch();
    const history = useHistory()
    const genres = useSelector((state) => state.genres)
    const platformsArray = ["PC", 'iOS', 'Android', 'MacOS', 'PlayStation 4', 'PlayStation 5', 'XBOX', 'PS Vita']
    const allPlatforms = platformsArray.map((e) => ({name : e}))
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: "", 
        description: "", 
        release_date: "", 
        rating: 0, 
        platforms: [],
        background_image: "",
        genre: []
    })

    const videogamesParaDB = {
        name: input.name,
        description: input.description,
        release_date: input.release_date,
        rating: input.rating,
        background_image: input.background_image,
        genre: input.genre,
        platforms: input.platforms.join(", ")
    }

    

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
        console.log(videogamesParaDB)
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    const handleCheck = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        })
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            genre: [...input.genre, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postVideogame(videogamesParaDB))
        alert('Videojuego creado!')
        setInput({
            name: "", 
            description: "", 
            release_date: "", 
            rating: 0, 
            platforms: [],
            background_image: "",
            genre: []
        })
        history.push('/videogames')
    }

    const handleDelete = (e) => {
        setInput({
            ...input,
            genre: input.genre.filter(el => el !== e)
        })
        setInput({
            ...input,
            platforms: input.platforms.filter(el => el !== e)
        })
    }


    return (
        <div>
            <NavBar/>
            <NavLink to="/videogames"><button>Home</button></NavLink>
            <h1>Crea tu videojuego</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input
                    type = "text"
                    value = {input.name}
                    name = "name"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <br/>
                <div>
                    <label>Description</label>
                    <input
                    type = "text"
                    value = {input.description}
                    name = "description"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.description && (
                        <p>{errors.description}</p>
                    )}
                </div>
                <br/>
                <div>
                    <label>Release Date</label>
                    <input
                    type="date"
                    value={input.release_date}
                    name="release_date"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <br/>
                <div>
                    <label>Rating</label>
                    <input
                    type="number"
                    value={input.rating}
                    name="rating"
                    max='5'
                    min='0'
                    step='0.01'
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <br/>
                <div>
                    <label>Platforms</label>
                    <select onChange={(e) => handleCheck(e)}>
                        {allPlatforms.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                    </select>
                    <ul><li>{input.platforms}</li></ul>
                    {errors.platforms && (
                        <p>{errors.platforms}</p>
                    )}
                    {/* {input.platforms.map(e => 
                <div key={e}>
                    <p>{e}</p>
                    <button onClick={() => handleDelete(e)}>X</button>
                </div>
                )} */}
                </div>
                <br/>
                <div>
                    <label>Genres</label>
                    <select onChange={(e) => handleSelect(e)}>
                        {genres?.map((g, index) => <option key={index} value={g.name}>{g.name}</option>)}
                    </select>
                <br/>
                    <ul><li>{input.genre.map(e => e + ' ,')}</li></ul>
                    {input.genre.map(e => 
                    <div>
                        <p>{e}</p>
                        <button onClick={() => handleDelete(e)}>X</button>
                </div>
                )}
                </div>
                <div>
                    <label>Image</label>
                    <input
                    type="text"
                    value={input.background_image}
                    name="background_image"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <br/>
                <button type="submit">Crear videojuego</button>
            </form>
            
            
        </div>
        
    )
}

export default VideogameCreate;