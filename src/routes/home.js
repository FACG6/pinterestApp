const express = require('express');
const app = express();
const router = express.Router();

const handler = router.get('/', (req, res) => 

	 res.render('home', {js: './js/domHome.js', css: './css/style.css'})
 ) ;

module.exports = { handler } ; 


