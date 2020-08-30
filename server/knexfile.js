// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: '4linux_ps',
      user: 'postgres',
      password: 'docker'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: '4linux_ps',
      user: 'postgres',
      password: 'docker'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: '4linux_ps',
      user: 'postgres',
      password: 'docker'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
  }

};
