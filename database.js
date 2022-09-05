// Setting up an SQLite database: ./app/database.js

import 'sqlite3';
import knex from 'knex';

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './coc.sqlite3'
  },
  useNullAsDefault: true
});

export default database;

