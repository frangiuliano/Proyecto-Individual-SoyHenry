const {Videogame, Genre} = require ('../db')
const axios = require ('axios');
const {API_KEY_VIDEOGAMES} = process.env


const apiInfo = async () => {
    let apiData = []
    let pages = 0;
    while (pages < 5){
        pages++
    let respuesta = `https://api.rawg.io/api/games?key=${API_KEY_VIDEOGAMES}&page=${pages}`
    apiData.push(respuesta)
    }

    const videogamesAPI = await Promise.all(
        apiData.map(e => axios(e).then((res) => res.data.results))
    )

    const apiUrl = videogamesAPI.flat()

    const videogames = apiUrl.map(e => {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            release_date: e.released,
            rating: e.rating,
            genres: e.genres.map(e => {return e.name}),
            platforms: e.platforms.map (e => {return e.platform.name}),
            background_image: e.background_image,
            created: false
        };
    });
    // videogames.forEach(e => {
    //     Videogame.bulkCreate([{
    //         name: e.name,
    //         description: e.description,
    //         release_date: e.released,
    //         rating: e.rating,
    //         genres: e.genres,
    //         platforms: e.platforms,
    //         background_image: e.background_image
    //     }])
    // })
    return videogames
}

const dbInfo = async () => {
    return await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const allVideogames = async () => {
    const API = await apiInfo();
    const DB = await dbInfo();
    const totalInfo = API.concat(DB);
    return totalInfo
}

module.exports = {apiInfo, dbInfo, allVideogames}