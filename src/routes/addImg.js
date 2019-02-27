const express = require('express');
const router =   express.Router();
const { addImge } = require('../database/queries/addData')

const addImgUrl = (req,res)=>{
    addImge(req.body.url,(err,result)=>{
    if(err)res.status(500).send('Server Error');       
    })
}

module.exports = {addImgUrl};