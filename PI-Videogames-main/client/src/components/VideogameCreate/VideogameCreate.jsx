import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {postVideogame, getGenres, getVideogames} from '../../actions/index'
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import styles from "./VideogameCreate.module.css"

const VideogameCreate = () => {
    
    const validate = (input) => {
        let errors = []
        if (!input.name){
            errors.name = 'Name is required';
        } else if (allVideogames.find(e => e.name.replace(/\s+/g, '').toLowerCase() === input.name.replace(/\s+/g, '').toLowerCase())){
            errors.name = 'Name already exists'
        } else if (!input.background_image){
            errors.background_image = "Image is required"
        } else if (!input.description) {
            errors.description = 'Description is required'
        } else if (!input.platforms) {
            errors.platforms = 'Platforms is required'
        }
        return errors;
    } 

    const dispatch = useDispatch();
    const history = useHistory()
    const genres = useSelector((state) => state.genres)
    const allVideogames = useSelector((state) => state.videogames)
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
        dispatch(getVideogames())
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
        if(e.target.value !== "All")
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        })
    }

    const handleSelect = (e) => {
        e.preventDefault();
        if(e.target.value !== "All")
        setInput({
            ...input,
            genre: [...input.genre, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postVideogame(videogamesParaDB))
        alert('Videogame created!')
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

    const handleDeletePlatforms = (e) => {
        setInput({
            ...input,
            platforms: input.platforms.filter(el => el !== e)
        })
    }

    const handleDeleteGenres = (e) => {
        setInput({
            ...input,
            genre: input.genre.filter(el => el !== e)
        })
    }

    return (
        <div >
            <NavBar/>
            <div className={styles.divGeneral}>
                <div className={styles.divBox}>
                    <div className={styles.divTitle}>
                        <p className={styles.title}>Create your videogame</p>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.divInfo}>
                            <div className={styles.div}>
                                <div className={styles.divRandom}></div>
                                <label className={styles.label}>Name</label>
                                <div className={styles.divRandom1}></div>
                                <input className={styles.input}
                                type = "text"
                                value = {input.name}
                                name = "name"
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter name"
                                />
                                {errors.name && (
                                    <p className={styles.errors}>⚠ {errors.name}</p>
                                )}
                            </div>
                            <br/>
                            <div className={styles.div}>
                                <div className={styles.divRandom}></div>
                                <label className={styles.label}>Image</label>
                                <div className={styles.divRandom1}></div>
                                <input className={styles.input}
                                type="text"
                                value={input.background_image}
                                name="background_image"
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter url"
                                />
                                {errors.background_image && (
                                    <p className={styles.errors}>⚠ {errors.background_image}</p>
                                )}
                            </div>
                            <br/>
                            <div className={styles.div}>
                                <div className={styles.divRandom}></div>
                                <label className={styles.label}>Release Date</label>
                                <div className={styles.divRandom1}></div>
                                <input className={styles.input}
                                type="date"
                                value={input.release_date}
                                name="release_date"
                                onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <br/>
                            <div className={styles.div}>
                                <div className={styles.divRandom}></div>
                                <label className={styles.label}>Rating</label>
                                <div className={styles.divRandom1}></div>
                                <input className={styles.input}
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
                            <div className={styles.div}>
                                <div className={styles.divRandom}></div>
                                <label className={styles.label}>Platforms</label>
                                <div className={styles.divRandom1}></div>
                                    <select className={styles.input} onChange={(e) => handleCheck(e)}>
                                        <option value="All">ALL PLATFORMS</option>
                                        {allPlatforms.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                <div className={styles.divPlatforms}>
                                {input.platforms.map((e, index) => <p key={index} className={styles.platformsDivididos} onClick={() => handleDeletePlatforms(e)}>{e + " "}</p>)}
                                {input.platforms.length !== 0 ? "" : <p className={styles.errors}>{errors.platforms = '⚠ Platforms is required'}</p> }
                                </div>
                                </div>
                            <br/>
                            <div className={styles.div}>
                                <div className={styles.divRandom}></div>
                                <label className={styles.label}>Genres</label>
                                <div className={styles.divRandom1}></div>
                                    <select className={styles.input} onChange={(e) => handleSelect(e)}>
                                        <option value="All">ALL GENRES</option>
                                        {genres?.map((g, index) => <option key={index} value={g.name}>{g.name}</option>)}
                                    </select>
                            <br/>
                            </div>
                            <div className={styles.divGenres}>
                                {input.genre.map((e, index) => <p key={index} className={styles.genresDivididos} onClick={() => handleDeleteGenres(e)}>{e + " "}</p>)}
                            </div>
                            <br/>
                            <div className={styles.div}>
                                <div className={styles.divRandom}></div>
                                <label className={styles.label}>Description</label>
                                <div className={styles.divRandom1}></div>
                                <div className={styles.divInput}>
                                    <textarea className={styles.input1}
                                    type = "text"
                                    value = {input.description}
                                    name = "description"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter description"
                                    />
                                </div>
                                {errors.description && (
                                    <p className={styles.errors}>⚠ {errors.description}</p>
                                )}
                            </div>
                        </div>
                        <br/>
                        <div className={styles.divButton}>
                            <button className={styles.button} type="submit" disabled={Object.entries(errors).length === 0? "" : true}>CREATE VIDEOGAME</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default VideogameCreate;