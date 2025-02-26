const http = require('http');

const server = http.createServer((req, res) => {
if(req.url === '/') {
    res.end('Welcome to our home page')
} 
if(req.url === '/about') {
    res.end('Here is our short history')
}
res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
`)
})

server.listen(5000)



// const http = require('http');

// const sever = http.createServer((req, res) => {
//     console.log('request event');
//     res.end('Hello World'); 
// }
// )

// sever.listen(5000, () => {
//     console.log('Server listening on port : 5000....');
// })