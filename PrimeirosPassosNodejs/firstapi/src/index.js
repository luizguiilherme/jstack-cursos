const http = require('http');

const server = http.createServer((request, response) =>{
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end('<h1>Olá Mundo!</h1>')

});

server.listen(3000, () => console.log('🐗️ Serer Sarted at http://localhost:3000'));