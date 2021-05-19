const db = require('./models')

function deleteAllTeams() {
    db.team.destroy({
        where: {founded: 'NULL'}
    })
};

// deleteAllTeams();