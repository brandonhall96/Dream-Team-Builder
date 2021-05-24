const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const axios = require('axios');
const { response } = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const methodOverride = require('method-override');



router.get('/', (req, res) => {
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
  
  router.get('/showplayer', isLoggedIn, (req, res) => {
    db.player.findAll()
    .then(foundPlayer => {
      res.render('player/showplayer.ejs', {playerList: foundPlayer})
    })
  });


  router.delete('/:playerId', (req,res) =>{
    db.player.destroy({where: {
      id: req.params.playerId
      
    }})
    .then(deletedPlayer=>{
      console.log(deletedPlayer)
      res.redirect('/player/showplayer')
    })
  })


  
router.get('/edit/:idx', (req, res) => {
  db.player.findOne({where: {
    id: req.params.idx
  }})
  .then(foundPlayer => {
    console.log(foundPlayer)
    res.render('player/edit', {player: foundPlayer})
  })
  .catch(err => {
    console.log(err)
    res.redirect('/showplayers')
  })

})

router.put('/:idx', (req, res) => {
    db.player.update(req.body, {where: {
      id: req.params.idx
      
    }})
    .then(editedPlayer => {
      
      console.log(editedPlayer)
      res.redirect('/player/showplayer')
      
    })
    .catch(err => {
      console.log(err)
      res.redirect('/player/showplayer')
    })
})
  


module.exports = router;