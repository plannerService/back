const Sequelize = require('sequelize')
const dotenv = require('dotenv')
const User = require('./users')
const Group = require('./group')
const Plan = require('./plan')

dotenv.config()

const env = process.env.ENV || 'development'
const config = require('../config/config')[env]
const db = {}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = User
db.Group = Group
db.Plan = Plan

User.init(sequelize)
Group.init(sequelize)
Plan.init(sequelize)

User.associate(db)
Group.associate(db)
Plan.associate(db)

module.exports = db
