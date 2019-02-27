const bcrypt = require('bcryptjs');
const { createCookie } = require('../utillity/authentication')
const checkUser = require('../database/queries/cheakUser')

exports.get = (request, response) => {
    if (request.cookies.auth) {
        response.redirect('/')
    }
    response.render('login', { js: './js/domLogin.js', css: './css/login.css', layout: 'loginSignupMain', title: 'SignUp' });
};

exports.post = (request, response) => {
   const { userName, password } = request.body;
   checkUser(userName, pass, (err, res) => {
      if (err) {
         response.redirect('/login');
      } else {
         bcrypt.compare(password, pass, (error, trueOrfalse) => {
            createCookie(res.id, (err, token) => {
               if (err) {
                  response.redirect('/login');
               }
               else {
                  response.setHeader('set-Cookie', `jwt=${token}; max-age=972592207599`);
                  response.redirect('/');
               }
            });

         })}
      });
};    