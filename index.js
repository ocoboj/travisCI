var express = require('express');

const PORT = 8080;

var app = express();
app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
