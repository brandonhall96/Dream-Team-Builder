// const express = require('express');
// const router = express.Router();
// const passport = require('../config/ppConfig');
// const db = require('../models');
// const axios = require('axios');
// const { response } = require('express');
// const isLoggedIn = require('../middleware/isLoggedIn');
// const methodOverride = require('method-override');


// router.get('/', (req, res) => {
//     res.render('team/index.ejs')
//   })
  
//   router.post('/', (req, res) => {
//     db.team.create(req.body)
//     .then(createdTeam => {
//       console.log(createdTeam.get())
//       res.redirect('/team/showteam')
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   });
  
//   router.get('/showteam', isLoggedIn, (req, res) => {
//     db.team.findAll()
//     .then(foundTeam => {
//       res.render('team/showteam.ejs', {teamList: foundTeam})
//     })
//   });


//   router.delete('/:teamId', (req,res) =>{
//     db.team.destroy({where: {
//       id: req.params.teamId
      
//     }})
//     .then(deletedTeam=>{
//       console.log(deletedTeam)
//       res.redirect('/team/showteam')
//     })
//   });


  








//   module.exports = router;
