const Teams = require('../models/teams');

class TeamsServices {

    getAllTeams = async () => {
        return await Teams.findAll();
    }

    addTeam = async (body) => {
        const searchTeam = await this.getTeam(body.title);
        if (searchTeam == null) {
            return await Teams.create({
                title: body.title
            });
        } else {
            return 'This team exists';
        }
    }

    getTeam = async (body) => {
        return await Teams.findOne({where: {title: body}})
    }

}

module.exports = new TeamsServices();