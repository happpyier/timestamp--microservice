/* ---request
_readableState,readable,domain,_events,_maxListeners,socket,connection,httpVersionMajor,httpVersionMinor,httpVersion,complete,headers,rawHeaders,trailers,rawTrailers,_pendings,_pendingIndex,upgrade,url,method,statusCode,statusMessage,client,_consuming,_dumped,next,baseUrl,originalUrl,_parsedUrl,params,query,res,route
*/
 
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/:tagId', function(request, response) {
  var reponseParsed = JSON.stringify(request.params.tagId);
  response.send("You said<br/>"+reponseParsed);
  response.end('Its Over!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
