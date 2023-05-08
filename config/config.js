require('dotenv').config()
module.exports = {
  development: {
    database: 'rt_database',
    dialect: 'postgres'
  },
  test: {
    database: 'rt_database',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
