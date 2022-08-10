const { Router } = require('express');
const router = Router();
const {allVideogames} = require ('./VideogamesModel')
const {API_KEY_VIDEOGAMES} = process.env
const axios = require ('axios')


router.get('/:id', async (req, res) => {
    const {id} = req.params
    const totalVideogames = allVideogames()
    const videogamesID = await axios.get (`https://api.rawg.io/api/games/${id}?key=${API_KEY_VIDEOGAMES}`)
    if (id){
        let {id,
            name, 
            description, 
            released, 
            background_image, 
            rating, 
            genres = genres.map(e => e.name), 
            platforms= platforms.map(e => e.platform.name)
        } = videogamesID.data

        if (videogamesID){
            return res.status(200).json({
                id,
                name,
                description,
                released,
                background_image,
                rating,
                genres,
                platforms
            })
        }
        else {
            return res.status(404).send(`No existen juegos con el id: ${id}`)
        }
    } else{
    return res.status(404).send(totalVideogames)}
})



module.exports = router;