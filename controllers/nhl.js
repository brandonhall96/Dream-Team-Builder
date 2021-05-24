const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const axios = require('axios');
const { response } = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');








router.get('/', function(req, res) {
  let teamsUrl = 'https://statsapi.web.nhl.com/api/v1/teams/';
    axios.get(teamsUrl).then(response => {
      let nhlTeams = response.data.teams
        res.render('nhl/index.ejs', {nhlTeams: nhlTeams});
  });
});







router.post('/', function(req, res) {
  db.team.create(req.body)
  .then(createdTeam => {
    console.log(createdTeam.get())
    res.redirect('/nhl/show')
  })
  
  
})


router.get('/create', isLoggedIn, (req, res) => {
  db.roster.findAll({where: {
    position: 'LW'
  }})
  .then(foundLW => {
  
  })
  res.render('nhl/create.ejs')
})

router.post('/create', (req, res) => {
  db.roster.create(req.body)
  .then(createdRoster => {
    console.log(createdRoster.get())
    res.redirect('/nhl/showteam')

  })
})

router.get('/showteam', isLoggedIn, (req, res) => {
  db.roster.findAll().then(foundRosters => {
    res.render('nhl/showteam.ejs', {rosterList: foundRosters})
    
  })

})




  
router.get('/show', function(req, res) {
  db.team.findAll()
 
  .then(foundTeams => {
    res.render('nhl/show', {faveList: foundTeams})
  })
});

router.delete('/:teamId', (req,res) =>{
  db.team.destroy({where: {
    id: req.params.teamId
    
  }})
  .then(deletedTeam=>{
    console.log(deletedTeam)
    res.redirect('/nhl/show')
  })
})


module.exports = router;