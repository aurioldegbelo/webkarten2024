let http = require('http') // use an existing module from node
let host = "localhost" // 127.0.0.1
var fs = require('fs');
let port = 5000


http.createServer(function (req, res) {
  fs.readFile('le04.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port, host);


console.log(`Server is running on ${host}:${port}`)