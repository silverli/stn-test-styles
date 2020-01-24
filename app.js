var express = require('express');
var path = require('path');

var app = express();

app.use('/css',express.static(__dirname +'/public/css'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// to add a new file, do this with a new.html file :)
// app.get('/new', function (req, res) {
//   res.sendFile(path.join(__dirname + '/new.html'));
// });;


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});