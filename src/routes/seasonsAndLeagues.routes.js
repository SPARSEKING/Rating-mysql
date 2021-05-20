const express = require('express');
const router = express.Router();

const controller = require('../controller/seasonsAndLeagues.controller');

router
    .post("/follow", controller.follow)
    .get("/data", controller.getData)

module.exports = router;