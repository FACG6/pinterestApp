const bcrypt = require('bcryptjs');
const { createCookie } = require('../utillity/authentication');
const { checkUser } = require('../database/queries/cheakUser');

exports.get = (request, response) => {
  if (request.cookies.auth) {
    response.redirect('/');
  }
  response.render('login', {
    js: './js/domLogin.js', css: './css/login.css', layout: 'loginSignupMain', title: 'SignUp'
  });
};

exports.post = (request, response) => {
  const { username, password } = request.body;
  checkUser(username, (err, user) => {
    if (err) {
      response.redirect('/login');
    } else {
      bcrypt.compare(password, user.password, (error, trueOrfalse) => {
        if (error) { response.redirect('/login'); }
        if (trueOrfalse) {
          response.cookie('jwt', createCookie(user.id), { maxAge: 972592207599 });
          response.redirect('/');
        } else {
          response.redirect('/login');
        }
      });
    }
  });
};
