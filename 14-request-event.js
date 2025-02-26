
// This bascially another method to create a server
// using Event Emitter API


const http = require('http');

// const sever = http.createServer((req, res) => {
    //res.end('Welcome')
    //})

    //using Event Emitter API
const server = http.createServer();
//emits request event
//subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})
server.listen(5000)