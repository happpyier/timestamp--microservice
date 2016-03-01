/*
domain,_events,_maxListeners,output,outputEncodings,outputCallbacks,writable,_last,chunkedEncoding,shouldKeepAlive,useChunkedEncodingByDefault,sendDate,_removedHeader,_hasBody,_trailer,finished,_hangupClose,_headerSent,socket,connection,_header,_headers,_headerNames,req,locals
*/
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var reponseParsed = JSON.stringify(response._events); 
  response.send("Need to work on the Stringify part"+'\n'+'The request is...'+"Not Gonna Happen"+'\n'+'The response is...\n'+reponseParsed);
  response.end('Its Over!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
