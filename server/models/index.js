var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {

      var query = 'SELECT * FROM texts';
      db.sendQuery.query(query, (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      });

    }, // a function which produces all the messages


    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },



    post: function () {

    }
  }
};

