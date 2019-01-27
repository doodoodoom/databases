var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req, res);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      models.users.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      });

    },
    post: function (req, res) {
      models.users.post(req, res);
    }
  }
};
