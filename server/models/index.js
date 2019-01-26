var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {

      var query = 'SELECT * FROM texts';
      //results are rows, fields are columns
      db.sendQuery.query(query, (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      });

    }, // a function which produces all the messages


    post: function (req, res) {
      var msg = JSON.stringify(req.body);
      var query = `INSERT INTO texts (message) values ('${msg}')`;
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
    get: function (req, res) {

      var query = 'SELECT * FROM usernames';
      db.sendQuery.query(query, (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(JSON.stringify(results));
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

