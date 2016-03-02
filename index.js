var express = require('express');
var app = express();
var path = require("path");
app.set('port', (process.env.PORT || 5000));

app.get('/:tagId', function(request, response) {
  var reponseParsed = JSON.stringify(request.params.tagId);
  //put a regular expression for data here!
  var searchedString = reponseParsed.search(/^\w\s\d\W\s\d$/gi);
  response.send("You said<br/>"+searchedString);
  //response.end('Its Over!'); 
});

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
  //response.end('Its Over!'); 
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
