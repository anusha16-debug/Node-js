
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.appendFile('mynewfile2.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      
      res.end();
}).listen(8080);

