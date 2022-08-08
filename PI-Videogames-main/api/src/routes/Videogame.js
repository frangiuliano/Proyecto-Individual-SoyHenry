const { Router } = require('express');
const router = Router();
const {allVideogames} = require ('./VideogamesModel')


router.get('/:idVideogame', async (req, res) => {
    const {idVideogame} = req.params
    const totalVideogames = await allVideogames()
    if (idVideogame){
        const videogameID = totalVideogames.filter(e => e.id == idVideogame)
        if (videogameID){
            return res.status(200).json(videogameID)
        }
        else {
            return res.status(404).send(`No existen juegos con el id: ${idVideogame}`)
        }
    } else{
    return res.status(404).send(totalVideogames)}
})



module.exports = router;