const Seasons = require('../models/seasons');
const Leagues = require('../models/leagues');
const Team = require('../models/teams');
const Scores = require('../models/scores');
const SeasonsAndLeagues = require('../models/seasonsAndleagues');
const Relteams = require("../models/teamsSeasonsAndLeagues");
const Stages = require('../models/stages');
const LeaguesServices = require('./leagues.services');

class SeasonsServices {

    getSeason = async (body) => {
        return await Seasons.findOne({where: {title: body.year}, include: [{
            model: SeasonsAndLeagues,
            include: [{
                model: Leagues,
                as: "league"
            },
            {
                model: Stages,
                as: "stage",
                include: [{
                    model: Scores,
                    as: "score",
                    include: [{
                        model: Relteams,
                        include: [Team]
                    }]
                }]
            }
        ]
        }
    ]});
    }

    getAllSeasons = () => {
        return Seasons.findAll();
    }

    addSeasons = async (season) => {
        return await Seasons.create({
            title: season.title,
            description: season.description
        });
    }
    
    searchSeason = async (body) => {
        return await Seasons.findOne({where: { title: body.year }});
    }

    followSeason = async (body) => {
        try {
            const currentSeason = this.searchSeason(body);
            const seachLeague = await LeaguesServices.getLeague(body.league);
            currentSeason.addLeague(seachLeague);
            return  currentSeason.getLeague();
        } catch(err) {
            return err;
        }
    }
}

module.exports = new SeasonsServices();