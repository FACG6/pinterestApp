const fs = require('fs');
const path = require('path');
const connection = require('./dbConnection');

const sqlFilePath = path.join(__dirname, 'dbBuilt.sql');
const sql = fs.readFileSync(sqlFilePath).toString();

const runDbBuild = () => new Promise((reslove, reject) => {
  dbConnection.query(sql, (err, res) => {
    if (err) reject(err);
    else reslove(res);
  });
});

module.exports = runDbBuild;