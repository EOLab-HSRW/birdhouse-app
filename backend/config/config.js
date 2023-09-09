require('dotenv').config('../')

const config = {
    SECRET : process.env.SECRET,
    DB_URL : process.env.DB_URL,
};

module.exports = config;