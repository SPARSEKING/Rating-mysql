const SeasonsAndLeaguesService = require('../services/seasonsAndLeagues.services');

class SeasonsAndLeaguesController {

    services = SeasonsAndLeaguesService;
    
    follow = async (req, res) => {
        res 
            .status(200)
            .send(this.services.follow(req.body))
    }

    getData = async (req, res) => {
        res 
            .status(200)
            this.services.getData().then(result => res.send(result));
    }

}

module.exports = new SeasonsAndLeaguesController();