const LeaguesService = require('../services/leagues.services');

class LeaguesController {

    services = LeaguesService;

    getAllLeagues = async (req,res) => {
        res.status(200);
        this.services.getAllLeagues().then(result => res.send(result));
    }

    addLeagues = async (req,res) => {
        res
            .status(200)
            .send(this.services.addLeague(req.body))
    }

    follow = async (req, res) => {
        res 
            .status(200)
            .send(this.services.follow(req.body));
    }

}

module.exports = new LeaguesController();