// import { GET_VIDEOGAMES, GET_GENRES } from "../actions";

const initialState = {
    videogames: [],
    genres: [],
    videogameDetail: {}
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case "GET_VIDEOGAMES": return {
            ...state,
            videogames: [...state.videogames, action.payload]             
        }
        case "GET_GENRES": return {
            ...state,
            genres: [...state.genres, action.payload]
        }
        case "GET_VIDEOGAME_BY_ID": return {
            ...state,
            videogameDetail: [...state.videogameDetail, action.payload]
        }
        default: 
            return {...state} 
    }

}

export default rootReducer;