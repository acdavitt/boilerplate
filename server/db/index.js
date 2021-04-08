const mysql = require('mysql');
const database = require('./config');

const connection = mysql.createConnection(database.database);

connection.connect();

exports.connection = connection;