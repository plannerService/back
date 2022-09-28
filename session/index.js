const mysql2 = require('mysql2/promise')
const dotenv = require('dotenv')
var session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
dotenv.config()

const options = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
}

const connection = mysql2.createPool(options)
const sessionStore = new MySQLStore({}, connection)

module.exports = sessionStore
