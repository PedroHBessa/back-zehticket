const uuidv4 = require('uuid/v4')
const events = require('../models/events')


module.exports = app => {
    const controller = {};


  
    controller.listEvents = async (req, res) => {
      const response =  await events.getEvents()
      res.status(200).json(response);
    }

    controller.getEvent = async (req, res) => {
      const {
        eventId,
      } = req.params;
      console.log(eventId)
      const response =  await events.getEvent(eventId)
      res.status(200).json(response);
    }

    controller.createEvent = (req, res) => {
      const eventId = uuidv4()
      const event = JSON.parse(req.body.event)
      const ticket = JSON.parse(req.body.tickets)
      events.createEvent({
        event: {...event, eventId: eventId, image: req.file.filename},
        tickets: {...ticket, eventId: eventId} 
    })
     
      res.status(201).json(req.body)

    }

    
    controller.media = (req, res) => {
     
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