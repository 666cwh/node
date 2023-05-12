const env = process.env.NODE_ENV

let NYSQL_CONF
if (env === 'dev') {
  NYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '521cwh...',
    port: '3306',
    database: 'myblog',
  }
}
if (env === 'production') {
  NYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '521cwh...',
    port: '3306',
    database: 'myblog',
  }
}

module.exports = {
  NYSQL_CONF,
}
