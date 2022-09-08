const uuidv4 = require('uuid/v4')
const users = require('../models/users')

module.exports = app => {
    const controller = {};

  
    controller.register = async (req, res) => {
      
      const response =  await users.register(req.body)
      res.status(200).json(response);
    }

    controller.login = async (req, res) => {
      const response =  await users.login(req.body)
      res.status(200).json(response);
    }
 
  
    return controller;
  }