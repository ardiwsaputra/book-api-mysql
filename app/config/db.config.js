// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
const env = process.env.NODE_ENV || "development";
const config = require("./db.config.json")[env];

module.exports = {
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  dialect: config.dialect,
  freezeTableName: true,
  logging: config.logging,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
