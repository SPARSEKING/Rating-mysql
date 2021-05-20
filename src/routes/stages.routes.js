const express = require('express');
const router = express.Router();

const controller = require('../controller/stages.controller');

router
    .get("/", controller.getAllStages)
    .post("/add", controller.addStage)

module.exports = router;