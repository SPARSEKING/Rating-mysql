const Stages = require('../models/stages');
const Seasons = require('../models/seasons');
const SeasonsAndLeagues = require('../models/seasonsAndleagues');
const SeasonsAndLeaguesService = require("./seasonsAndLeagues.services");
const LeaguesServices = require("./leagues.services");
const SeasonsServices = require("./seasons.services");

class StagesServices {

    getStages = async (body) => {
        return await Stages.findOne({where: {title: body.title}});
    }

    addStage = async (body) => {
        const searchSeason = await SeasonsServices.searchSeason(body);
        const searchLeague = await LeaguesServices.getLeague(body.league);
        const seasonsAndLeagues = await SeasonsAndLeaguesService.searchData(searchSeason, searchLeague);
        return await Stages.create({
            title: body.title,
            place: body.place,
            description: body.description,
            rel_seasons_leagues_id: seasonsAndLeagues.id
        });
    }

}

module.exports = new StagesServices();