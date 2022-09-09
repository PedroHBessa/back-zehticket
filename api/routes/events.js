module.exports = app => {
    const controller = app.controllers.events;
  
    app.route('/api/events')
      .get(controller.listEvents)
      .post(controller.createEvent)

    app.route('/api/event/:eventId')
    .get(controller.getEvent)
    

    app.route('/api/events/:eventId')
      .delete(controller.removeEvent)
      .put(controller.updateEvent)
  }

