var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var sendQuery = mysql.createConnection({
  host: '127.0.0.1',
  user: 'student',
  password: 'student',
  database: 'chat'
});

sendQuery.connect();

module.exports = sendQuery;