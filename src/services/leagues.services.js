const Leagues = require('../models/leagues');

class LeaguesServices {

    getAllLeagues = async () => {
        return await Leagues.findAll();
    }

    addLeague = async (league) => {
        return await Leagues.create({
            title: league.title,
            description: league.description
        });
    }
    
    getLeagueById = async (league) => {
        return await Leagues.findOne({where: { id: league}})
    }

    getLeague = async (league) => {
        return await Leagues.findOne({where: { title: league}})
    }
}

module.exports = new LeaguesServices();