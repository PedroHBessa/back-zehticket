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
    const Users = sequelize.define("users", {
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

    sequelize.sync().then(() => {
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
        console.log(data.email)
       return Users.findOne({where: {email: data.email}}).then(res => {
          if(res === null){
            console.log("usuário não cadastrado")
            return "User not found"
          } else {
            return Users.findOne({where: {email: data.email, password: data.password}}).then(res => {
              if(res === null){
                console.log('Wrong email or password')
                return "Wrong email or password"
              } else {
                console.log("login successfull")
                return "logged in"
              }
            }
            )
            
          }})
        }
          
     
            
    

     module.exports = {register, login}