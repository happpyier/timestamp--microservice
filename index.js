/* ---request
domain,_events,_maxListeners,output,outputEncodings,outputCallbacks,writable,_last,chunkedEncoding,shouldKeepAlive,useChunkedEncodingByDefault,sendDate,_removedHeader,_hasBody,_trailer,finished,_hangupClose,_headerSent,socket,connection,_header,_headers,_headerNames,req,locals
*/
 
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  var reponseParsed = JSON.stringify(request.baseUrl);
  var reponseUnparsed = Object.keys(request); 
  var reponseUnparsed111 = 'id: ' + request.query.id; 
  var hiiiKitty = request;
  if (hiiiKitty == "helloKitty")
  {
	response.send("Kitty is here <br/> Need to work on the Stringify part"+'<br/>'+'The reponse unParsed is...<br/>'+reponseUnparsed+'\<br/>'+'The response is...<br/>'+reponseParsed);
	response.end('Its Over!');
  }
  else
  {
	response.send("Kitty is nowhere to be found <br/> Need to work on the Stringify part"+'<br/>'+'The reponse unParsed is...<br/>'+reponseUnparsed+'\<br/>'+'The response is...<br/>'+reponseParsed);
	response.end('Its Over!');
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
