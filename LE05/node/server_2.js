// Shorter Version 
let http = require('http') // use an existing module from node
let host = "localhost" // 127.0.0.1
let port = 5000


const turf = require("@turf/turf")
var point1 = turf.point([-73.988214, 40.749128]);
console.log("Turf example", point1)

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write ("I have a new message")
    res.end()
}).listen(port, host)

console.log(`Server is running on ${host}:${port}`)
