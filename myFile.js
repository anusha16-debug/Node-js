var http = require('http');
var dateTime = require('./myModule');
var result = require('./customModule');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dateTime.myDateTime()); //write a response to the client
  res.write("Area of a rectangle: " + result.myAreaCalculation());        //write a response to the client
  res.end('Hello World!');  //end the response
}).listen(8080);  //the server object listens on port 8080
console.log("Server is running at 8080")
