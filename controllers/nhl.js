const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
const axios = require('axios')


router.get('/create', (req, res) => {
    res.render('nhl/create.ejs');
});
















module.exports = router;