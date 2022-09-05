// Setting up an SQLite database: ./app/database.js

import 'sqlite3';
import knex from 'knex';

const database = knex({
  client: 'sqlite3',
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

export default getNames()