const dbconnection = require('../dbConnection');
//For signUp
const checkIfUserExist = (username,cb)=>{
    const sql = 'SELECT username FROM users WHERE username = ($1)';
    const values = [username];
dbconnection.query(sql,values,(err,result)=>{
    if(err) cb(err);
    cb(null,result);
})
};