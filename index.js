var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(request, response) {
  res.send('This is my first PROJECT!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
