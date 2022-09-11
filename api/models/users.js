const {Sequelize, DataTypes} = require("sequelize")
const database = require('../../config/database')


  
     
     database.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });
    const Users = database.define("users", {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
          },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
    })

    database.sync().then(() => {
      console.log('Users table created successfully!');
   }).catch((error) => {
      console.error('Unable to create table : ', error);
   });
   
    const register = async (data) => {
      
      return Users.findOne({ where: {email: data.email} }).then(res=>{
        if(res === null){
          Users.create(data).then(res => {
            return 'User registered'
        }).catch((error) => {
            console.error('error: ', error);
        });
        } else {
          return "Email already exists"
        }
      })
       
      }
      const login = async (data) => {
       return Users.findOne({where: {email: data.email}}).then(res => {
          if(res === null){
            return {response: res, message: 'user not found'}
          } else {
            return Users.findOne({where: {email: data.email, password: data.password}}).then(res => {
              if(res === null){
                return {response: res, message: 'wrong email or passaword'}
              } else {
                return {response: res, message: 'logged in'}
              }
            }
            )
            
          }})
        }
          
     
            
    

     module.exports = {register, login}