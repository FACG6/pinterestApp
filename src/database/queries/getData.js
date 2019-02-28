
const connection = require('../dbConnection');

const getData = (cb) => {
  connection.query('SELECT * from images', (err,res)=>{
    cb(err,res.rows)
  });
  
};

module.exports = {getData};
