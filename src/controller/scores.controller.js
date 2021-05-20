const ScoresService = require('../services/scores.services');

class ScoresController {

    services = ScoresService;

    getAllScores = async (req,res) => {
        res.status(200);
        this.services.getAllScores().then(result => res.send(result));
    }

    addScore = async (req, res) => {
        res
            .status(200)
            .send(this.services.addScore(req.body))
    }

}

module.exports = new ScoresController();