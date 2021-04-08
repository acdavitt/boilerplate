const express = require('express');
const queries = require('./db/model');

const PORT = 3004;
const app = express();

app.use(express.json());
app.use(express.static('dist'));

app.post('/photos', (req, res) => {
  queries.addPhoto(req.body, (err,photo) => {
    if (err) {
      console.log('Error posting photo', err)
    } else {
      res.send(photo);
    }
  })
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})