const { Router } = require('express');
const router = Router();
const {allVideogames, dbInfo} = require ('./VideogamesModel')
const {API_KEY_VIDEOGAMES} = process.env
const axios = require ('axios');


router.get('/:id', async (req, res) => {
    const {id} = req.params
    const totalVideogames = await allVideogames()
    const DatabaseInfo = await dbInfo()
    const videogameDatabase = DatabaseInfo.find(e => e.id.toString() === id)
    if (id){
       if (videogameDatabase){
            let {id,
                name, 
                description, 
                release_date, 
                background_image, 
                rating, 
                genres,
                platforms,
            } = videogameDatabase
            return res.status(200).json({
                id,
                name,
                description,
                release_date,
                background_image,
                rating,
                genres: genres.map(e => e.name),
                platforms
            })
        }
        else if (!videogameDatabase){
            const videogamesID = await axios.get (`https://api.rawg.io/api/games/${req.params.id}?key=${API_KEY_VIDEOGAMES}`)
            const arrayVideogames = [videogamesID.data]
            const videogameOriginal = arrayVideogames.find (e => e.id.toString() === req.params.id)
            let {id,
                name, 
                description_raw, 
                released, 
                background_image, 
                rating, 
                genres,
                platforms,
            } = videogameOriginal
            return res.status(200).json({
                id,
                name,
                description_raw,
                released,
                background_image,
                rating,
                genres: genres.map(e => e.name),
                platforms: platforms.map(e => e.platform.name)
            })
        }
        else {
            return res.status(404).send(`No existen juegos con el id: ${id}`)
        }
    } else{
    return res.status(404).send(totalVideogames)}
})



module.exports = router;