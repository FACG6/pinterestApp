const express = require('express');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const { checkIfUserExist } = require('../database/queries/cheakUser');
const { createCookie } = require('../utillity/authentication')
const {addUser} = require('../database/queries/addData')
const router = express.Router();

const handler = (req, res) => {
  if (req.cookies.auth) {
    res.redirect('/profile');
  } else {
    res.render('signup', { layout: 'loginSignupMain', title: 'SignUp', js: './js/domSignup.js', css: './css/signup.css' });
  }
};

const confirmedHandler = (req, res) => {
  if (req.cookies.jwt) {
    res.redirect('/');
  } else {
    const allData = req.body;
    checkIfUserExist(allData.username, (err, existOrNot) => {
      if (err) {
        res.status(500).send('<h1>500 Server Error</h1>');
      } else {
        if (!existOrNot) {
          bcrypt.genSalt(5, (er, salt) => {
            if (er) res.send('Try again please');
            bcrypt.hash(allData.password, salt, (eror, hashed) => {
              if (eror) res.send('Try again please');
              addUser(allData.username, hashed, (error, result) => {
                console.log(result);
                if (error) res.send('Try again please');
                res.cookie('jwt', createCookie(result.id), { maxAge: 972592207599 });
                res.redirect('/');
              })
            })
          })

        } else {
          res.send('choose another userName');
        }
      }
    })
  }
}
module.exports = { handler, confirmedHandler }

