const { Sequelize } = require ('sequelize');
const{ user, database, password } = require ('../config/config.js');


const seq = new Sequelize(database, user, password, {
    dialect: 'postgres',
    host: '/tmp',
    define: {
      timestamps: false
    }
});


// seq.authenticate()
// .then(() => seq.sync())
// .catch((error) => console.log(error));

seq.authenticate()
.then(() => console.log('connected!'))
.catch((error) => console.log(error));

module.exports = seq;