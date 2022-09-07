const uuidv4 = require('uuid/v4')
const events = require('../models/events')

module.exports = app => {
    const eventsDB = app.data.events
    const controller = {};


    const {
      events: eventsMock,
    } = eventsDB
  
    controller.listEvents = async (req, res) => {
      const response =  await events.getEvents()
      res.status(200).json(response);
    }

    controller.getEvent = async (req, res) => {
      const {
        eventId,
      } = req.params;
      const response =  await events.getEvent(eventId)
      res.status(200).json(response);
    }

    controller.saveEvent = (req, res) => {
      events.addEvent({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        image: req.body.image
    })
     
      res.status(201).json(eventsMock)

    }

    controller.removeEvent = (req, res) => {
      const {
        eventId,
      } = req.params;

      const foundEventIndex = eventsMock.data.findIndex(event => event.id === eventId)

      if(foundEventIndex === -1){
        res.status(404).json({
          message: "Event not found",
          success: false,
          events: eventsMock,
        });
      } else {
        eventsMock.data.splice(foundEventIndex, 1)
        res.status(200).json({
          message: "Event was removed",
          success: true,
          events: eventsMock,
        })
      }
    }

      controller.updateEvent = (req, res) => {
        const {
          eventId,
        } = req.params;

        const foundEventIndex = eventsMock.data.findIndex(event => event.id === eventId)

        if(foundEventIndex === -1){
          res.status(404).json({
            message: "Event not found",
            success: false,
            events: eventsMock,
          });
        } else {

          const newEvent = {
            id: eventId,
            name: req.body.name
          }
          eventsMock.data.splice(foundEventIndex, 1, newEvent)
          res.status(200).json({
            message: "Event was updated",
            success: true,
            events: eventsMock,
          })
        }
      }


      
   
  
    return controller;
  }