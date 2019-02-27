const dbconnection = require('../dbConnection');
const checkIfUserExist = (username,cb)=>{
    const sql = 'SELECT username FROM users WHERE username = ($1)';
    const values = [username];
dbconnection.query(sql,values,(err,result)=>{
    if(err) cb(err);
    cb(null,result);
})
};

const checkUser = (userName, password, cb) => {
    const sql = 'SELECT userName, password,id from users where userName = ($1) AND password = ($2)'
    const values = [userName, password];
    dbconnection.query(sql, values, (err, result) => {
      cb(err,result.rows[0]);
    })
};


module.exports = {checkUser,checkIfUserExist };