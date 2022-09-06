// Setting up an SQLite database: ./app/database.js
let knex = require("knex") 

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './coc.sqlite3'
  },
  useNullAsDefault: true
});


const getUnits = async () => {
  let res = database.select().from("units")
  return res ;
}

module.exports = { getUnits }