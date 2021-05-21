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




  router.get('/showplayer', function(req, res) {
    db.player.findAll()
   
    .then(foundPlayers => {
      res.render('player/showplayer', {playerList: foundPlayers})
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


  // router.post('/', (req, res) => {
  //   db.player.create(req.body)
  //   .then(createdPlayer => {
  //     console.log(createdPlayer.get())
  //     res.redirect('/player/showplayer')
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // });



  router.get('/edit/:idx', (req, res) => {
    db.player.update({where: {
      id: req.params.playerId
    }})
    .then(updatedPlayer => {
      res.render('player/edit', {editPlayer: updatedPlayer})

    })
  });

  router.put('/:idx', (req, res) => {

  })
    
  
      

  // router.put('/:idx', function(req, res){
  //   const dinoData = JSON.parse(dinosaurs);
  //   db.player.update({where: {
  //     db.player.
  //   }})
  
  //   //re-assign the name and type fields of the dinosaur to be editted
  //   dinoData[req.params.idx].name = req.body.name;
  //   dinoData[req.params.idx].type = req.body.type;
  //   dinoData[req.params.idx].type = req.body.type;
  //   dinoData[req.params.idx].type = req.body.type;
  //   dinoData[req.params.idx].type = req.body.type;
  
  //    // save the editted dinosaurs to the data.json file
  //   fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
  //   res.redirect('/dinosaurs');
  // });
  
  
 
  


































module.exports = router;