const SeasonsAndLeagues = require('../models/seasonsAndleagues');
const LeaguesService = require('./leagues.services');
const TeamsService = require('./teams.services');
const SeasonsService = require('./seasons.services');

class SeasonsAndLeaguesService {

    follow = async (body) => {
        const searchSeason = await SeasonsService.searchSeason(body);
        const searchLeague = await LeaguesService.getLeague(body.league);
        const searchTeam = await TeamsService.getTeam(body.team);
        const seasonsAndLeagues = this.searchData(searchSeason, searchLeague);
        if(seasonsAndLeagues) {
            seasonsAndLeagues.addTeam(searchTeam)
        }
        return seasonsAndLeagues.getTeam();
    }

    getData = async (body) => {
        return await SeasonsAndLeagues.findAll({where: { seasons_id: body}})
    }

    searchData = async (searchSeason, searchLeague) => {
        return await SeasonsAndLeagues.findOne({where: {seasons_id: searchSeason.id, leagues_id: searchLeague.id}})
    }
}

module.exports = new SeasonsAndLeaguesService();