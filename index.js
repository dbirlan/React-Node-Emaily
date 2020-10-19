const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'fuck you bross' });
  res.send({ bye: 'fuck you dude' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);