const { Router } = require('express');
const router = Router();
const {allVideogames} = require ('./VideogamesModel')
const {Videogame, Genre} = require ('../db')

router.get('/', async (req, res) => {
    const {name} = req.query
    let totalVideogames = await allVideogames();
    if (name){
        const namesVideogames = totalVideogames.filter(e => e.name.toLowerCase().includes (name.toLowerCase()));
        if (namesVideogames.length){
            return res.status(200).json(namesVideogames)
        }else{
        return res.status(200).send(['No existen juegos con ese nombre'])}
    }
    return res.status(200).json(totalVideogames)
})

router.post('/', async (req, res) => {
    const totalVideogames = await allVideogames()
    const {name, description, release_date, rating, platforms, created, background_image, genre} = req.body;
    if(totalVideogames.find(e => e.name.replace(/\s+/g, '').toLowerCase() === req.body.name.replace(/\s+/g, '').toLowerCase())){
        res.status(400).send('Videojuego ya existente')
    }else {
    let videogameCreated = await Videogame.create({name, description, release_date, rating, platforms, created: true, background_image})
    let genreDB = await Genre.findAll({where: {name : genre}})
    videogameCreated.addGenre(genreDB)
    res.status(200).send('Videojuego creado con exito')
    }
})



module.exports = router; 