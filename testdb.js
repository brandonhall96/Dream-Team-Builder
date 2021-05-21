const db = require('./models');
const axios = require('axios')



function addNewTeam() { 
    //create a new team > add to database > print new team in console
    db.team.create({  
        teamName: 'Capitals',
        city: 'Washington',
        link: 'https://www.nhl.com/capitals',
        venue: 'Capital One Arena',
        founded: 1974
    })
    .then(newTeam => {
        console.log(newTeam); // new team was created in db
    })
    .catch(err => {
        console.log(err) // catch any errors that may print if no team was added
    })
};

// addNewTeam();

function addNewPlayerToTeam() { //findOne() grabs the first one add params to narrow search findOne({location: Los Angeles})
    db.team.findOne() 
    .then(capitals => {
        console.log(capitals.get()) // use create player method 
        capitals.createPlayer({  //calling the team from the then statement i can input a team
            lastName: 'Ovechkin',
            firstName: 'Alex',
            position: 'LW',
            jerseyNumber: 8,
            salary: 10000000,
            teamId: 1
        })
        .then(newPlayer => {
            console.log(newPlayer) //new player that was added to the db
        })
        .catch(err => {
            console.log(err)
        })
    })
};

// addNewPlayerToTeam();


function fetchCapitalsPlayers() {
    db.team.findOne()           // go into team and findOne
        .then(capitals => {      //now in lakers
            capitals.getPlayers() //get players in lakers
            .then(players => {  //then go into players
                console.log(players); // print players
            })
            .catch(err => {
                console.log(err)
            })
        
    })
    
};

// fetchCapitalsPlayers();

function fetchTeamNames() {
    db.team.findAll()
    .then(team => {
        console.log(team)
    })
    .catch(err => {
        console.log(err)
    })
};

// fetchTeamNames();

function fetchPlayer() {
    db.people.findOne({where:{
        lastName: 'Ovechkin'
    }})
    .then(Ovechkin => {
        console.log(Ovechkin)
    })
    .catch(err => {
        console.log(err)
    })
};

// fetchPlayer();


function deleteRosters() {
    db.roster.findAll()
    .then(deletedRosters => {
        console.log(deletedRosters)
    })
    .catch(err => {
        console.log(err)
    })
}

// deleteRosters();

function fetchLwPlayers() {
    db.roster.findAll({where: {
        position: 'LW'
    }})
    .then(foundLW => {
        console.log(foundLW)
    })
    .catch(err => {
        console.log(err)
    })
};

// fetchLwPlayers();

// function deletePlayer() {
//     db.player.
// }

