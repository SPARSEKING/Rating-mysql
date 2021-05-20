const TeamsService = require('../services/teams.services');

class TeamsController {

    services = TeamsService;

    getAllTeams = async (req,res) => {
        res.status(200);
        this.services.getAllTeams().then(result => res.send(result));
    }

    addTeam = async (req, res) => {
        res
            .status(200)
            .send(this.services.addTeam(req.body))
    }

}

module.exports = new TeamsController(); 