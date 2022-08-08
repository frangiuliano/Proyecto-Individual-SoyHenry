const {Genre} = require ('../db')
const axios = require ('axios');
const {API_KEY_VIDEOGAMES} = process.env

const getApiDbInfo = async () => {
    const apiUrl = await axios.get (`https://api.rawg.io/api/genres?key=${API_KEY_VIDEOGAMES}`)
    const genres = await apiUrl.data.results.map(e => e.name)
    genres.forEach(e => {
        Genre.findOrCreate({where: {name: e}})
    })
}   

module.exports = {getApiDbInfo}