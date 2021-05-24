const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

const db = require('../models');

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'See you next time...');
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '../profile',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome to the Thunderdome...',
  failureFlash: 'Either email or password is incorrect. Please try again.'
}));

router.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const [user, created] = await db.user.findOrCreate({
      where: { email },
      defaults: { name, username, password }
    });

    if (created) {
      console.log(`------ ${user.name} was created ------`);
      const successObject = {
        successRedirect: '../profile',
        successFlash: `Welcome to the Thunderdome ${user.name}.`
      }

      passport.authenticate('local', successObject)(req, res);
    } else {
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }

  } catch (error) {
    console.log('------ Error --------');
    console.log(error);
    // Handle the user in case something goes wrong
    req.flash('error', 'Either email or password is incorrect. Please try again.');
    res.redirect('/auth/signup');
  }
});

module.exports = router;
