const {Sequelize, DataTypes} = require("sequelize")



    const sequelize = new Sequelize(
        'zehticket',
        'root',
        'Qwe#974fqwe#974F',
         {
           host: 'localhost',
           dialect: 'mysql'
         }
       );
     
     sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
    const Events = sequelize.define("events", {
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
    })
    sequelize.sync().then(() => {
      console.log('Events table created successfully!');
   }).catch((error) => {
      console.error('Unable to create table : ', error);
   });

    const addEvent = (data) => {Events.create(data).then(res => {
        console.log("Event created")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
   });
}
    const getEvent = async (eventId) => { return Events.findOne({where: {id: eventId}}).then(res => {
        return {event: res}
    }).catch((error) => {
        console.error('Event not found : ', error);
    });
}
 
   const getEvents = async () => { return Events.findAll().then(res => {
    return {events: res}
    
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

    
    }

     module.exports = {addEvent, getEvents, getEvent}
