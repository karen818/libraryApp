module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'library'
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug:true
  }
};
