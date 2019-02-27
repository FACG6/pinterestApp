const dbconnection = require('../dbConnection');

const checkIfUserExist = (username, cb) => {
  const sql = 'SELECT username id FROM users WHERE username = ($1)';
  const values = [username];
  dbconnection.query(sql, values, (err, result) => {
    if (err) cb(err);
    cb(null, result.rows[0]);
  });
};

const checkUser = (userName, cb) => {
  const sql = 'SELECT * from users where userName = ($1);'
  const values = [userName];
  dbconnection.query(sql, values, (err, result) => {
    cb(err, result.rows[0]);
  });
};

module.exports = { checkIfUserExist, checkUser };
