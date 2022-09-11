const {Sequelize, DataTypes} = require("sequelize")
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const {
  HOST,
  SERVER,
  USER,
  PASSWORD,
} = process.env
const db = new Sequelize(
    SERVER,
    USER,
    PASSWORD,
        {
            host: HOST,
            dialect: "mysql"
        }
        );

    
        module.exports = db
