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


    post: function (params, callback) {
      // var msg = JSON.stringify(req.body);
      var query = 'INSERT INTO messages (text, username, roomname) VALUE (?, (SELECT id FROM usernames WHERE name = ? LIMIT 1), ?)';
      db.query(query, params, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      var query = 'SELECT * FROM usernames';
      db.query(query, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },



    post: function (params, callback) {
      var query = 'INSERT INTO usernames (name) VALUE (?)';
      db.query(query, params, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(err, results);
        }
      });
    }
  }
};

