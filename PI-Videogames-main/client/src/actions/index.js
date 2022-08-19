import axios from "axios"
export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const GET_VIDEOGAME_BY_NAME = 'GET_VIDEOGAME_BY_NAME'
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID'
export const GET_GENRES = 'GET_GENRES'


export const getVideogames = () => async dispatch => {
    const response = await fetch ('http://localhost:3001/videogames');
    const json = await response.json();
    dispatch({type: GET_VIDEOGAMES, payload: json})
}

export const searchByName = (name) => async dispatch => {
    const response = await fetch (`http://localhost:3001/videogames?name=${name}`)
    const json = await response.json();
    console.log(json)
    dispatch({type: GET_VIDEOGAME_BY_NAME, payload: json})
}

export const searchById = (id) => async dispatch => {
    const response = await fetch (`http://localhost:3001/videogame/${id}`)
    const json = await response.json();
    console.log(json)
    dispatch({type: GET_VIDEOGAME_BY_ID, payload: json})
}

export const getGenres = () => async dispatch => {
    const response = await fetch ('http://localhost:3001/genres')
    const json = await response.json();
    dispatch({type: GET_GENRES, payload: json})
}

export const postVideogame = (payload) => async dispatch => {
    const response = await axios.post ('http://localhost:3001/videogames', payload)
    return response
}

export const orderByNameAndRating = (payload) => {
    return {type: "ORDER_BY_NAME_AND_RATING", payload}
}

export const filterVideogamesByGenres = (payload) => {
    return {type: 'FILTER_BY_GENRES', payload}
}

export const filterCreated = (payload) => {
    return {type: "FILTER_CREATED", payload}
}

export const cleanFilter = () => {
    return {type: "CLEAN_FILTER", payload: []}
}

