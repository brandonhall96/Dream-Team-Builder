const db = require('./models')

function deleteAllTeams() {
    db.team.destroy({
        where: {teamName: 'NULL'}
    })
};

// deleteAllTeams();