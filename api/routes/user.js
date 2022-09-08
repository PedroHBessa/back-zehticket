module.exports = app => {
    const controller = app.controllers.users;
  
    app.route('/api/register/')
      .post(controller.register)
    
      app.route('/api/login/')
      .post(controller.login)
  }