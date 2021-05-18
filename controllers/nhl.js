const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const axios = require('axios');







router.get('/', function(req, res) {
  let teamsUrl = 'https://statsapi.web.nhl.com/api/v1/teams/';

  axios.get(teamsUrl).then(response => {
    let nhlTeams = response.data.teams
  
    
    
    res.render('nhl/index.ejs', {nhlTeams: nhlTeams});
  });
});
  

router.get('/show', function(req, res) {
  db.team.findAll()
 
  then(foundTeams => {
    res.render('show', {faveList: foundTeams})
  })
});

router.post('/result', function(req, res) {
  db.team.create(req.body)
  .then(createdTeam => {
    res.redirect('/nhl')
  })
  console.log(req.body)
});




// router.get('/', function(req, res) {
//   db.nhlTeams.findAll()
//   .then(foundNhlTeam => {
//     res.render('nhl/index.ejs', {faveList: foundNhlTeam} )
//   })
// });

// router.post('/', function(req, res) {
//   db.nhlTeam.create(req.body)
//   .then(createdNhlTeam => {
//     res.redirect('/nhl')
//   })
// });







router.get('/create', (req, res) => {
    res.render('nhl/create.ejs');
});









// router.get('/:id', (req, res) => {
//     let teamId = req.params.teamId
//     db.teams.findOne({where: {
//         id: teamId
//     }})

//     .then(foundTeam => {
//         let teamSearch = foundTeam.dataValues.name;
//         axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamSearch}`)
//         .then(response => {
//             let teamInfo = response.data
//             let name = teamInfo.name
//             let arena = teamInfo.venue.name
//         }
//     })
// });
















module.exports = router;