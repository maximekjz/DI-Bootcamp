const knex = require('knex');
require('dotenv').config()

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env;

module.exports = {
    db : knex({
        client: 'pg',
        connection: {
          host: PGHOST,
          port: 5432,
          user: PGUSER,
          password: PGPASSWORD,
          database: PGDATABASE,
          ssl: {rejectUnauthorized:false},
      }}
      )
}