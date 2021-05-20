const StagesService = require('../services/stages.services');

class StagesController {

    services = StagesService;

    getAllStages = async (req,res) => {
        res.status(200);
        this.services.getAllStages().then(result => res.send(result));
    }

    addStage = async (req, res) => {
        res
            .status(200)
            .send(this.services.addStage(req.body))
    }

}

module.exports = new StagesController();