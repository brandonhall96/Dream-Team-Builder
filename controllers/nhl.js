const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const axios = require('axios');





router.get('/', function(req, res) {
    let teamsUrl = 'https://statsapi.web.nhl.com/api/v1/teams/';
  
    axios.get(teamsUrl).then(response => {
      let teams = response.data.results
      res.render('nhl/index', {teams: teams});
    });

});



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