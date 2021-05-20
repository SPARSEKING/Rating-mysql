const express = require('express');
const router = express.Router();

const controller = require('../controller/teams.controller');

router
    .get("/", controller.getAllTeams)
    .post("/add", controller.addTeam)

module.exports = router;