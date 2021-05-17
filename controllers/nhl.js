const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const axios = require('axios')


router.get('/create', (req, res) => {
    res.render('nhl/create.ejs');
});

router.get('/index', function(req, res) {
    let teamsUrl = 'https://statsapi.web.nhl.com/api/v1/teams/';
  
    axios.get(teamsUrl).then(response => {
      let teams = response.data.results
      res.render('/nhl/index.ejs', {teams: teams.slice(0, 31)});
    });

});
















module.exports = router;