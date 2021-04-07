const mysql = require('mysql');
// Note: you'll need to create this config file if you want to use it for your connection
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if(err) {
    console.error(err);
  } else {
    console.info(`Connected to ${config.database} database...`);
  }
});

module.exports = connection;
