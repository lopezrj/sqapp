// Setting up an SQLite database: ./app/database.js
let knex = require("knex") 

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './coc.sqlite3'
  },
  useNullAsDefault: true
});

module.exports = { database }