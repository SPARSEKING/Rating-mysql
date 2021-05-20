const express = require('express');
const sequelize = require('./src/services/dbConnect');
const LeaguesRouter = require('./src/routes/leagues.routes');
const ScoresRouter = require('./src/routes/scores.routes');
const SeasonsRouter = require('./src/routes/seasons.routes');
const StagesRouter = require('./src/routes/stages.routes');
const TeamsRouter = require('./src/routes/teams.routes');
const SeasonsAndLeaguesRouter = require('./src/routes/seasonsAndLeagues.routes');
const TeamsSeasonsAndLeagues = require('./src/models/teamsSeasonsAndLeagues');
const SeasonsAndLeagues = require('./src/models/seasonsAndleagues');
const Teams = require('./src/models/teams');
const Scores = require('./src/models/scores');
const Stages = require('./src/models/stages');
const Leagues = require('./src/models/leagues');
const Seasons = require('./src/models/seasons');

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/leagues', LeaguesRouter);
app.use('/scores', ScoresRouter);
app.use('/seasons', SeasonsRouter);
app.use('/stages', StagesRouter);
app.use('/teams', TeamsRouter);
app.use('/seasonsandleagues', SeasonsAndLeaguesRouter);

Stages.hasMany(Scores, {as: 'score', foreignKey: 'stages_id'})
Scores.belongsTo(Stages, {foreignKey: "stages_id"})

SeasonsAndLeagues.hasMany(Stages, {as: 'stage', foreignKey: 'rel_seasons_leagues_id'});
Stages.belongsTo(SeasonsAndLeagues, {foreignKey: "rel_seasons_leagues_id"});

TeamsSeasonsAndLeagues.hasMany(Scores, {as: 'relteams', foreignKey: 'rel_teams_rel_seasons_leagues_id'});
Scores.belongsTo(TeamsSeasonsAndLeagues, {foreignKey: "rel_teams_rel_seasons_leagues_id"});

Leagues.belongsToMany(Seasons, {
    through: SeasonsAndLeagues,
    as: 'season',
    foreignKey: 'leagues_id'
});

Seasons.belongsToMany(Leagues, {
    through: SeasonsAndLeagues,
    as: 'league',
    foreignKey: 'seasons_id'
});

Leagues.hasMany(SeasonsAndLeagues, {foreignKey: 'leagues_id'});
SeasonsAndLeagues.belongsTo(Leagues, {foreignKey: 'leagues_id'});
Seasons.hasMany(SeasonsAndLeagues, {foreignKey: 'seasons_id'});
SeasonsAndLeagues.belongsTo(Seasons, {foreignKey: 'seasons_id'});

Teams.belongsToMany(SeasonsAndLeagues, {
    through: 'relteams',
    as: 'rel_seasons_leagues',
    foreignKey: 'teams_id'
});

SeasonsAndLeagues.belongsToMany(Teams, {
    through: 'relteams',
    as: 'team',
    foreignKey: 'rel_seasons_leagues_id'
});

Teams.hasMany(TeamsSeasonsAndLeagues, {foreignKey: 'teams_id'});
TeamsSeasonsAndLeagues.belongsTo(Teams, {foreignKey: 'teams_id'});
SeasonsAndLeagues.hasMany(TeamsSeasonsAndLeagues, {foreignKey: 'rel_seasons_leagues_id'});
TeamsSeasonsAndLeagues.belongsTo(SeasonsAndLeagues, {foreignKey: 'rel_seasons_leagues_id'});

sequelize.sync().then(
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}...`)
    })
)
