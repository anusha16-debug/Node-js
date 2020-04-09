var http = require('http');
var url  = require('url');

http.createServer( function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var info = q.name + " " + q.age + " " + q.city;
  res.end(info);
}).listen(8080);