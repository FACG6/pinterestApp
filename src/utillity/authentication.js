const jwt = require('jsonwebtoken');
require('dotenv').config();

const createCookie = (idUser, cb) => {
  const payload = {
    id : idUser
  }
    const tkoen = jwt.sign(payload, process.env.SECRET);
    return tkoen
};

module.exports = { createCookie };