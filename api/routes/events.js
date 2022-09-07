module.exports = app => {
    const controller = app.controllers.events;
  
    app.route('/api/v1/events')
      .get(controller.listEvents)
      .post(controller.saveEvent)
  }

  app.route('/api/v1/events/:eventId')
    .delete(controller.removeEvent)