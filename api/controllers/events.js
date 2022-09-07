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