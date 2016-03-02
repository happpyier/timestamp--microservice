var express = require('express');
var app = express();
var path = require("path");
app.set('port', (process.env.PORT || 5000));

app.get('/:tagId', function(request, response) {
  var preReponseParsed = request.params.tagId;
  ReponseParsed = preReponseParsed.replace(",", "");
  var searchedString = /^\w*\s[1-9]+\S\s\d*$/.test(reponseParsed);
  var searchedString2 = /^\d{8,10}$/.test(reponseParsed);
  if (searchedString2  == true && searchedString2 > 100000000)
  {
	var d = new Date(ReponseParsed);
	dateInNaturaltime = d.toDateString();
	var dateInNaturaltime = Date.parse("January 1, 2016")/ 1000;
	response.send("{\"unix\":"+reponseParsed+",\"natural\":\""+dateInNaturaltime+"\"}"); 
	response.send("it got here");
  }
  else
  {
	  if (searchedString == true)
	  {
		var dateInUnixtime = Date.parse(reponseParsed)/ 1000;
		response.send("{\"unix\":"+dateInUnixtime+",\"natural\":\""+reponseParsed+"\"}");
	  }
	  else
	  {
		response.send("Please enter a date in the form of Unix Time(1451606400) or Natural Time(January 1, 2016)")
	  }
  //}
});

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
  //response.end('Its Over!'); 
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
