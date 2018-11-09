var http = require('http');
var static = require('node-static');
var file = new static.Server('.');
const url = require('url');


http.createServer(function(req, res) {

  //var parsedUrl = url.parse(req.url, true);
  if (req.url == "/myNameForm") {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      console.log("BODY: " + body);
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8"',
        'Cache-Control': 'no-cache'
      });  
      res.write("Hello, " + JSON.parse(body).myName);
      res.end("");
    })
    ;


  } else {
    file.serve(req, res);
  }

}).listen(8080);



console.log('Server running on port 8080');