const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'bye-bye friend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// git push -u origin main            (for github push)