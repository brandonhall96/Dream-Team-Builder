const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const axios = require('axios');
const { response } = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');



router.get('/', isLoggedIn, (req, res) => {
    res.render('player/index.ejs')
  })
  
  router.post('/', (req, res) => {
    db.player.create(req.body)
    .then(createdPlayer => {
      console.log(createdPlayer.get())
      res.redirect('/player/showplayer')
    })
    .catch(err => {
      console.log(err)
    })
  
  });
  
  router.get('/showplayer', (req, res) => {
    db.player.findAll()
    .then(foundPlayer => {
      res.render('player/showplayer.ejs', {playerList: foundPlayer})
    })
  
  });
  


































module.exports = router;