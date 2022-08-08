const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Videogames = require ('./Videogames.js')
const Genres = require ('./Genres.js')
const Videogame = require ('./Videogame')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', Videogames)
router.use('/genres', Genres)
router.use('/videogame', Videogame)




module.exports = router;
