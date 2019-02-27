const connection = require('../dbConnection');

const checkUser = (userName, password, cb) => {
  const sql = 'SELECT userName, password,id from users where userName = ($1) AND password = ($2)';
  const values = [userName, password];
  connection.query(sql, values, (err, result) => {
    cb(err, result.rows[0]);
  });
};


module.exports = checkUser;
