const { Router } = require("express");
const axios = require("axios");
const { Genres } = require('../db.js');
const { MY_API_KEY } = process.env;

const router = Router();

router.get ('/', async(req,res)=>{
    try {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${MY_API_KEY}`) 
    const genresArray = await genresApi.data.results ;
  
    genresArray.forEach(genres =>{
      Genres.findOrCreate({ where : { name : genres.name} })
    })
    const allGenres = await Genres.findAll();
    res.send(allGenres)
    } catch (error) {
      console.log("error in  get/genres", error)
    }
  })

module.exports = router;