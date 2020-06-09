const knex = require('knex');
const knexfile = require('../knexfile'); //imported this

// const connectionConfig = {
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// }; 
//got rid of all of this because now it lives in knexfile


//you can also do 
// const config = knexfile.development


module.exports = knex(knexfile.development);//got rid of connectConfig here
//then throw config in ^^ there 