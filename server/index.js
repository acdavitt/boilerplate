const express = require('express');
const app = express();
const PORT = 3030;
const db = require('./db/model');

app.use(express.json());
app.use(express.static('dist'));

// Add routing!
app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/image', (req, res) => {
  // send the data to the database
  console.log('Post received:', req.body);

  db.create(req.body, (err, result) => {
    if(err) {
      console.error('POST error:', err);
      res.status(400).send('Could not store photo information.');
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, (err) => {
  console.info(`Listening on port ${PORT}...`);
});
