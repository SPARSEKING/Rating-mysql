const express = require('express');
const router = express.Router();

const controller = require('../controller/seasons.controller');
const { getAllData } = require('../services/seasons.services');

router
    .get("/", controller.getAllSeasons)
    .post("/add", controller.addSeasons)
    .get("/getseason", controller.getSeason)
    .post("/follow", controller.followSeason)
    .get("/data", controller.getSeasonWithLeague)
    .get("/alldata", controller.getAllData)

module.exports = router;