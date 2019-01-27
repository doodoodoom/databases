var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var messageInfo = [req.body.text, req.body.username, req.body.roomname];
      models.messages.post(messageInfo, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.status(201).send();
        }
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      models.users.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });

    },
    post: function (req, res) {
      var userInfo = req.body.name;
      models.users.post(userInfo, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.status(201).send();
        }
      });
    }
  }
};
