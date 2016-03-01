/* ---response
domain,_events,_maxListeners,output,outputEncodings,outputCallbacks,writable,_last,chunkedEncoding,shouldKeepAlive,useChunkedEncodingByDefault,sendDate,_removedHeader,_hasBody,_trailer,finished,_hangupClose,_headerSent,socket,connection,_header,_headers,_headerNames,req,locals
*/
/* ---response.connection
_connecting,_hadError,_handle,_parent,_host,_readableState,readable,domain,_events,_maxListeners,_writableState,writable,allowHalfOpen,destroyed,bytesRead,_bytesDispatched,_pendingData,_pendingEncoding,server,_idleTimeout,_idleNext,_idlePrev,_idleStart,parser,_paused,read,_consuming,_httpMessage 
*/
/* ---response.connection.server
domain,_events,_maxListeners,_connections,_handle,_usingSlaves,_slaves,allowHalfOpen,pauseOnConnect,httpAllowHalfOpen,timeout,_connectionKey
*/
/* ---response.connection.parser
0,1,2,3,_headers,_url,socket,incoming,maxHeaderPairs,onIncoming
*/
/* ---response.connection.parser.incoming
_readableState,readable,domain,_events,_maxListeners,socket,connection,httpVersionMajor,httpVersionMinor,httpVersion,complete,headers,rawHeaders,trailers,rawTrailers,_pendings,_pendingIndex,upgrade,url,method,statusCode,statusMessage,client,_consuming,_dumped,next,baseUrl,originalUrl,_parsedUrl,params,query,res,_parsedOriginalUrl,route 
*/  
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var reponseParsed = JSON.stringify(response.connection.parser.incoming._parsedOriginalUrl);
  var reponseUnparsed = response.connection.parser.incoming._parsedOriginalUrl;
  response.send("Need to work on the Stringify part"+'<br/>'+'The reponse unParsed is...<br/>'+reponseUnparsed+'\<br/>'+'The response is...<br/>'+reponseParsed);
  response.end('Its Over!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
