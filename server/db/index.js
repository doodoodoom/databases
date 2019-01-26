var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// var sendQuery = function(query) {
//   var dbConnection = mysql.createConnection({
//     user: 'student',
//     password: 'student',
//     database: 'chat'
//   });
//   dbConnection.connect();
//   dbConnection.query(query);
//   dbConnection.end();
// };
var sendQuery = function(query, callback) {
  var dbConnection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });

  dbConnection.connect();

  dbConnection.query('SELECT * FROM usernames', (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, results, fields);
    }
  });

  dbConnection.end();
};