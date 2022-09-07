const uuidv4 = require('uuid/v4')

module.exports = app => {
    const eventsDB = app.data.events
    const controller = {};

    const {
      events: eventsMock,
    } = eventsDB
  
    controller.listEvents = (req, res) => res.status(200).json(eventsDB);

    controller.saveEvent = (req, res) => {
      eventsMock.data.push({
        id: uuidv4(),
        name: req.body.name,
        description: req.body.description
      })

    /*   constroller.removeEvent = (req, res) => {
        const {
          customerId
        }
      } */


      res.status(201).json(eventsMock)
    }
  
    return controller;
  }