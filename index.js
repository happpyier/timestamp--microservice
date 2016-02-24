var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var oMyOBject = {any:'data'};
  var oMyOBject2 = JSON.parse(oMyOBject);
  response.type('application/json');
  response.send("Need to work on the Stringify part"+'\n'+'The request is...'+"Not Gonna Happen"+'\n'+'The response is...'+oMyOBject2);
  response.end('Its Over!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
