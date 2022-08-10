// import { GET_VIDEOGAMES, GET_GENRES, GET_VIDEOGAME_BY_ID } from "../actions";

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    videogameDetail: {}
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case "GET_VIDEOGAMES": return {
            ...state,
            videogames: [...action.payload],
            allVideogames: action.payload
        }
        case "GET_GENRES": return {
            ...state,
            genres: [...action.payload]
        }
        case "GET_VIDEOGAME_BY_ID": return {
            ...state,
            videogameDetail: action.payload
        }
        case 'FILTER_BY_GENRES': 
            const allVideogames = state.allVideogames
            console.log(allVideogames[0].genres)
            const genresFilter = action.payload === 'All' ? allVideogames : allVideogames.filter(e => e.genres.find(e => e === action.payload))
            console.log(genresFilter)
            return {
                ...state,
                videogames: genresFilter    
        }
        case 'FILTER_CREATED':
            const createdFilter = action.payload === 'Created' ? state.allVideogames.filter(e => e.created) : state.allVideogames.filter(e => !e.created)
            console.log(state.allVideogames)
            console.log(createdFilter)
            return {
                ...state,
                videogames: createdFilter
        }
        case "ORDER_BY_NAME_AND_RATING": 
            if (action.payload === "A - Z"){
                return {...state, videogames: state.videogames.sort((prev, next) => {
                    if(prev.name > next.name) return 1
                    if (prev.name < next.name) return -1
                    return 0
                })}}

            if (action.payload === "Z - A"){
                return {...state, videogames: state.videogames.sort((prev, next) => {
                    if (prev.name < next.name) return 1
                    if (prev.name > next.name) return -1
                    return 0
                })}}

            if (action.payload === 'Higher - Lower'){
                return {...state, videogames: state.videogames.sort((prev, next) => next.rating - prev.rating)}}
            
            if (action.payload === 'Lower - Higher'){
                return {...state, videogames: state.videogames.sort((prev, next) => prev.rating - next.rating)}}

            else {
                return {...state, vidoegames: state.allVideogames}
            }


            // let orderArray = action.payload === "A - Z" ? state.videogames.sort ((a, b) => {
            //     if (a.name > b.name) {
            //         return 1;
            //     }
            //     if (a.name < b.name) {
            //         return -1
            //     }
            //     return 0
            // }) :
            // state.videogames.sort ((a, b) => {
            //     if (a.name < b.name) {
            //         return 1;
            //     }
            //     if (a.name > b.name) {
            //         return -1
            //     }
            //     return 0
            // })
            // return {
            //     ...state,
            //     videogames: orderArray
            // }
        default: 
            return {...state} 
    }

}

export default rootReducer;