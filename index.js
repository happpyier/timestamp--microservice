var express = require('express');
var app = express();
var path = require("path");
app.set('port', (process.env.PORT || 5000));

app.get('/:tagId', function(request, response) {
  var reponseParsed = request.params.tagId;
  //put a regular expression for data here! 1451624400
  var searchedString = /^\w*\s[1-9]+\S\s\d*$/.test(reponseParsed);
  var searchedString2 = /^\d{8,}$/.test(reponseParsed);
  response.send("it got here");
  /*
  if (searchString2  == true && reponseParsed > 86400000)
  {
	var dateInNaturaltime = Date.parse("January 1, 2016")/ 1000;
	response.send("{\"unix\":"+reponseParsed+",\"natural\":\""+dateInNaturaltime+"\"}");
  }
  else if (searchedString == true)
  {
	var dateInUnixtime = Date.parse(reponseParsed)/ 1000;
	response.send("{\"unix\":"+dateInUnixtime+",\"natural\":\""+reponseParsed+"\"}");
  }
  else
  {
	response.send("Please enter a date in the form of Unix Time(1451606400) or Natural Time(January 1, 2016)")
  }
  */
});

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
  //response.end('Its Over!'); 
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
