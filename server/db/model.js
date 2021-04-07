// database queries here
const db = require('./index');

module.exports = {
  create: (params, callback) => {
    // title, url, explanation
    var queryString = 
    `INSERT INTO photos (title, photo_url, explanation) VALUES ( ?, ?, ?)`;

    db.query(queryString, [params.title, params.url, params.explanation], (err, result) => {
      callback(err, result);
    });
  }
};

