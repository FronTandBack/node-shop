const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'HUGE',
  database: 'node_shop'
  // password: 'neo'
});

module.exports = pool.promise();
