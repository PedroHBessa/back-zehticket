const {Sequelize, DataTypes} = require("sequelize")
const database = require('../../config/database')


    // const sequelize = database
     
     database.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
    const Events = database.define("events", {
      eventId: {
        type: DataTypes.STRING,
        allowNull: false
      },  
      title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
          },
        image: {
        type: DataTypes.STRING,
        allowNull: true
        },
        location: {
          type: DataTypes.STRING,
          allowNull: true
          },
        time: {
          type: DataTypes.STRING,
          allowNull: true
          },
        
    })
    const Tickets = database.define("tickets", {
      eventId: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      title: {
          type: DataTypes.STRING,
          allowNull: false
        },
      price: {
          type: DataTypes.STRING,
          allowNull: false
        },
  })
    database.sync().then(() => {
      console.log('Events table created successfully!');
      console.log('Tickets table created successfully!');
   }).catch((error) => {
      console.error('Unable to create table : ', error);
   });

    const createEvent = (data) => {
      Events.create(data.event).then(res => {
        console.log("Event created")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
   });
      Tickets.create(data.tickets).then(res => {
        console.log("Event created")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}
    const getEvent = async (eventId) => { 
      let response = {
        event: '',
        tickets: ''
      }
      response.event =  await Events.findOne({where: {eventId: eventId}}).then(res => {
        return res
    }).catch((error) => {
      console.error('Event not found : ', error);
  })
  
   response.tickets = await Tickets.findOne({where: {EventId: eventId}}).then(res => {
     return res
   }).catch((error) => {
       console.error('Event not found : ', error);
   })
   return response
}
 
   const getEvents = async () => { return Events.findAll().then(res => {
    return {events: res}
    
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

    
    }

     module.exports = {getEvents, getEvent, createEvent}
