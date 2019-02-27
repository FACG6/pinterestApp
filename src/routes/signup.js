const {checkIfUserExist} = require('../database/queries/cheakUser');
const express = require('express');
const router = express.Router();

const handler = (req, res) => {
    console.log(66666,req.cookies);
    if (req.cookies.auth) {
        res.redirect('/profile');
    } else {
        res.render('signup', { layout: 'loginSignupMain', title: 'SignUp',js:'./js/domSignup.js',css:'./css/signup.css'});
    }
};

const confirmedHandler = (req, res) => {
    if (req.auth) {
        res.redirect('/');
    } else {
        const allData = req.body;
        checkIfUserExist(allData.userName,allData.password,(err,result)=>{
        if (err) {
            res.status(500).send('<h1>500 Server Error</h1>');
        } else {
            res.render('signup', { layout: 'loginSignup', title: 'SignUp' })
        }
        })
    }

}

module.exports = { handler , confirmedHandler }