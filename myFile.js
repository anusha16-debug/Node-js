var http = require('http');
var dateTime = require('./myModule')
var result = require('./customModule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dateTime.myDateTime());
  res.write("Area of a rectangle: " + result.myAreaCalculation());
  res.end('Hello World!');
}).listen(8080);
console.log("Server is running at 8080")
