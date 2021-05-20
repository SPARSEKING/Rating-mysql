const Scores = require('../models/scores');
const Relteams = require("../models/teamsSeasonsAndLeagues");
const StagesService = require("./stages.services");
const LeaguesServices = require("./leagues.services");
const TeamsServices = require("./teams.services");
const SeasonsServices = require("./seasons.services");
const SeasonsAndLeaguesService = require("./seasonsAndLeagues.services");

class ScoresServices {

    getAllScores = async () => {
        return await Scores.findAll();
    }

    addScore = async (body) => {
        const searchStage = await StagesService.getStages(body);
        const searchSeason = await SeasonsServices.searchSeason(body)
        const searchLeague = await LeaguesServices.getLeague(body.league);
        const searchTeams = await TeamsServices.getTeam(body.team);
        const seasonsAndLeagues = await SeasonsAndLeaguesService.searchData(searchSeason, searchLeague);
        const searchRelTeams = await Relteams.findOne({where: {rel_seasons_leagues_id: seasonsAndLeagues.dataValues.id, teams_id: searchTeams.id }})
        return await Scores.create({
            score_count: body.count,
            stages_id: searchStage.id,
            rel_teams_rel_seasons_leagues_id: searchRelTeams.id
        });
    }

}

module.exports = new ScoresServices();