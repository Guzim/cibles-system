// My nodejs server
const http = require('http')

const PORT = 1992

var server = http.createServer ( (request, response) => {
  response.end('Hello World, path hit:' + request.url)
})

server.listen(PORT, () => {
  console.log ('Server is listening')
})

module.exports = server
