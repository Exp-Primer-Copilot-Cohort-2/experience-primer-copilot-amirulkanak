// Create web server
// Create a web server that listens to requests on port 3000. When a request is received, the server responds with the content of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('An error occurred');
      return;
    }
    res.end(data);
  });
});

server.listen(3000);