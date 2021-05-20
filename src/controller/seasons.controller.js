const SeasonsService = require('../services/seasons.services');

class SeasonsController {

    services = SeasonsService;

    getAllSeasons = (req,res) => {
        res.status(200);
        this.services.getAllSeasons().then(result => res.send(result));
    }

    addSeasons = async (req,res) => {
        res
            .status(200)
            .send(this.services.addSeasons(req.body))
    }

    getSeason = async (req, res) => {
        res
            .status(200)
            this.services.getSeason(req.body).then(result => res.send(result));
    }

    followSeason = async (req, res) => {
        res 
            .status(200)
            .send(this.services.followSeason(req.body));
    }

    getSeasonWithLeague = async (req, res) => {
        res 
            .status(200)
            this.services.getSeasonWithLeague(req.body).then(result => res.send(result));
    }

    getAllData = async (req, res) => {
        res
            .status(200)
            this.services.getAllData(req.body).then(result => res.send(result));
    }

}

module.exports = new SeasonsController();