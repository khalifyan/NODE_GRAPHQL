const Sequelize = require('sequelize')

const DB_NAME = 'node-todo'
const USER_NAME = 'root'
const PASSWORD = 'admin123'

const sequelize = new Sequelize(DB_NAME,USER_NAME,PASSWORD,{
    host:'localhost',
    dialect:'mysql',
    port:3307
})

module.exports = sequelize