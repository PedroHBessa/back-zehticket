const multer = require('multer')
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})
const upload = multer({storage: storage})

module.exports = app => {
    const controller = app.controllers.events;
  
    app.route('/api/events')
      .get(controller.listEvents)
      .post(upload.single('image'), controller.createEvent)

    app.route('/api/event/:eventId')
    .get(controller.getEvent)
    

    app.route('/api/events/:eventId')
      .delete(controller.removeEvent)
      .put(controller.updateEvent)

      app.route('/api/media/') 
      .post(upload.single('image'), controller.media)
  }

