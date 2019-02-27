const jwt = require('jsonwebtoken');
require('dotenv').config();

const createCookie = (idUser, cb) => {
    jwt.sign(idUser, process.env.SECRET, cb
  );
};

module.exports = { createCookie };