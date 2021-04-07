// database queries here
const db = require('./index');

// module.exports = {
//   create: (params, callback) => {
//     // title, url, explanation
//     var queryString = 
//     `INSERT INTO photos (title, photo_url, explanation) VALUES ( ?, ?, ?)`;

//     db.query(queryString, [params.title, params.url, params.explanation], (err, result) => {
//       callback(err, result);
//     });
//   }
// };

// While the above was working, defining module.exports as a whole object can get a bit messy!
// Also, we want to explicitly handle our errors separately from our success :)

const create = ({ explanation, title, url}, callback) => {
  const queryString = 'INSERT INTO photos (explanation, title, photo_url) VALUES (?,?,?)';
  const photoValues = [explanation, title, url];

  db.query(queryString, photoValues, (err, results) => {
    if(err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  create,
}
