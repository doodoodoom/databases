var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      var query = 'SELECT messages.id, messages.text, messages.roomname, usernames.name FROM messages LEFT OUTER JOIN usernames ON (messages.username = usernames.id)';
      //results are rows, fields are columns
      db.query(query, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });

    }, // a function which produces all the messages


    post: function (req, res) {
      var msg = JSON.stringify(req.body);
      var query = `INSERT INTO messages (text) values ('${msg}')`;
      db.sendQuery.query(query, (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(201).send();
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      var query = 'SELECT * FROM usernames';
      db.sendQuery.query(query, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },



    post: function (req, res) {
      var username = JSON.stringify(req.body);
      var query = `INSERT INTO usernames (name) values ('${username}')`;
      db.sendQuery.query(query, (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(201).send();
        }
      });
    }
  }
};

