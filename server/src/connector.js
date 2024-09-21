const mariadb = require("mariadb");
const dotenv = require("dotenv").config();

// Function to create a connection pool
const createPool = (database) => {
  return mariadb.createPool({
    host: process.env.HOST, // Database host
    port: process.env.DB_PORT, // Port number for MariaDB
    user: process.env.USER, // MariaDB username
    password: process.env.PASSWORD, // MariaDB password
    database: database || undefined, // Optional: specify a database if provided
    connectionLimit: 10, // Limit the number of connections in the pool
  });
};
console.log(createPool);

module.exports = createPool;
