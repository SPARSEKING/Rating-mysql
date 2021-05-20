const express = require('express');
const router = express.Router();

const controller = require('../controller/scores.controller');

router
    .get("/", controller.getAllScores)
    .post("/add", controller.addScore)

module.exports = router;