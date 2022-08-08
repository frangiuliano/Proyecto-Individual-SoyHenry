const { Router } = require('express');
const router = Router();
const {getApiDbInfo} = require ('./GenresModel')
const axios = require ('axios');
const {API_KEY_VIDEOGAMES} = process.env
const {Genre} = require ('../db')

router.get('/', async (req, res) => {
    const apiUrl = await axios.get (`https://api.rawg.io/api/genres?key=${API_KEY_VIDEOGAMES}`)
    const genres = await apiUrl.data.results.map(e => e.name)
    genres.forEach(e => {
        Genre.findOrCreate({where: {name: e}})
    })
    const genresVideogames = await Genre.findAll()
    try {
        res.status(200).json(genresVideogames)
    } catch (error) {
        res.status(404).send(error)
    } 
})


module.exports = router;