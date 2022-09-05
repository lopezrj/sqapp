const { contextBridge } = require("electron");
// Setting up an SQLite database: ./app/database.js

const sqlite = require("sqlite3");
const {knex} = require("knex");

const database = knex({
  client: 'sqlite',
  connection: {
    filename: 'coc.sqlite3'
  },
  useNullAsDefault: true
});

console.log(database);

const getNames = () => {
    console.log("Here");
  let res = database.select('Unit').from("units");
  return res;
}

contextBridge.exposeInMainWorld( "api", {
    getNames: getNames
})