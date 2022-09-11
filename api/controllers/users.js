const uuidv4 = require('uuid/v4')
const users = require('../models/users')

module.exports = app => {
    const controller = {};
    controller.me = async (req, res) => {
      
      if(req.session.user){
        res.status(200).json(req.session.user);
      } else  {
        res.status(200).json({message: 'no user logged in'});
      }
     
    }
  
    controller.register = async (req, res) => {
      
      const response =  await users.register(req.body)
      res.status(200).json(response);
    }

    controller.login = async (req, res) => {
      const login =  await users.login(req.body)
      if(!login.response){
        res.status(404).json(login.message);
      }
      if(login.response){
        req.session.user = {
          id: login.response.id,
          name: login.response.name,
          email: login.response.email,
          isLogged: true
        }
      res.status(200).json(req.session.user);
      }
    }
    controller.logout = async (req, res) => {
      if(req.session.user){
        delete req.session[user]
        res.status(200).json({isLogged: false});
      } else {
        res.status(404).json('not found')
      }
      
     
    }
 
  
    return controller;
  }