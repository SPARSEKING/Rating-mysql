const express = require('express');
const router = express.Router();

const controller = require('../controller/leagues.controller');

router
    .get("/", controller.getAllLeagues)
    .post("/add", controller.addLeagues)
    .post("/follow", controller.follow)

module.exports = router;