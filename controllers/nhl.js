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
  console.log(req.body)
  res.redirect('nhl/show')
  
})

router.get('/create', (req, res) => {
  res.render('nhl/create')
})
  

router.get('/show', function(req, res) {
  db.team.findAll()
 
  .then(foundTeams => {
    res.render('nhl/show', {faveList: foundTeams})
  })
});




router.get('/newplayer', isLoggedIn, (req, res) => {
  res.render('nhl/newplayer.ejs')
})

router.post('/newplayer', (req, res) => {
  db.player.create(req.body)
  .then(createdPlayer => {
    console.log(createdPlayer.get())
    res.redirect('/nhl/showplayer')
  })
  .catch(err => {
    console.log(err)
  })

});

router.get('/showplayer', (req, res) => {
  db.player.findAll()
  .then(foundPlayer => {
    res.render('nhl/showplayer.ejs', {playerList: foundPlayer})
  })

});














// router.post('/create', (req, res) => {
  //   db.people.create(req.body)
  //   .then(createdPlayer => {
    //     res.redirect('nhl/createdteam')
    //   })
    // });
    
    
    
    
    
    
    
//     router.get('/create', (req, res) => {
//       res.render('nhl/create.ejs')
//     })




// router.get('/createdteam', (req, res) => {
//   const searchFunction = req.query.searchPlayer
//   axios.get(`https://statsapi.web.nhl.com/api/v1/people/"${searchFunction}"`)
//   .then((response) => {
//     res.render('nhl/createdteam.ejs', {people: response.data})
//   })

// })

// router.get('/createdteam/:id', (req, res) => {
//   const resultId = req.params.id
//   axios.get(`https://statsapi.web.nhl.com/api/v1/people/${resultId}`)
//   .then((response) => {
//     res.render('')
//   })

// })















// router.get('/create', function(req, res) {
//   let playerId = req.params.id
//   db.person.findOne({where: {
//     id: playerId
//   }
//   })
//   .then(foundPlayer => {
//     let searchFunction = 
  
// })
































module.exports = router;