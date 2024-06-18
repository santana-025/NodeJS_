require('dotenv').config();


const mysql = require("mysql");

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'Jdv'
})

module.exports = conexao;