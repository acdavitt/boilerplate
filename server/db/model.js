//queries ti db in this file
const db = require('./index');

const addPhoto = (photo, callback) => {
  const {title, link, explanation} = photo;
  db.connection.query('INSERT INTO photos (title, link, explanation) VALUES (?, ?, ?)', [title, link, explanation], (err, addedPhoto) => {
    if (err) {
      console.log('error adding to db', err)
      callback(err);
    } else {
      callback(null, addedPhoto);
    }
  })
}

module.exports = {
  addPhoto
}