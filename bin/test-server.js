var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain',

        // Allow calls from localhost:3000
        // https://en.wikipedia.org/wiki/Same-origin_policy
        // https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    });

  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
