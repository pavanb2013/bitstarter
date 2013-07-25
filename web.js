var express = require('express');
var fs =  require('fs');
var app = express();
app.use(express.logger());
var data = fs.readFileSync('index.html');
var buffer = new Buffer(data.length);
buffer.write(data);
app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
