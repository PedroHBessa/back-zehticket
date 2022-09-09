/* module.exports = app => {
    const controller = app.controllers.tickets;
  
    app.route('/api/tickets/:eventId')
      .get(controller.getTickets)
      //.post(controller.saveEvent)

    app.route('/api/event/:eventId')
    .get(controller.getEvent)
    // .post(controller.saveEvent)

    app.route('/api/events/:eventId')
      .delete(controller.removeEvent)
      .put(controller.updateEvent)
  } */