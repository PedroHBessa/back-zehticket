/* const uuidv4 = require('uuid/v4')
const tickets = require('../models/tickets')

module.exports = app => {
    const controller = {};

  
    controller.getTickets = async (req, res) => {
      const {
        eventId,
      } = req.params;
      const response =  await tickets.getTickets(eventId)
      res.status(200).json(response);
    }
 
  
    return controller;
  } */