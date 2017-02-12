// My nodejs server
const http = require('http')
const constants = require ('../lib/constants')

var PORT = process.env.PORT || constants.PORT

var server = http.createServer ( (request, response) => {
  response.end('Hello World, path hit: ' + request.url + ' tadaa !!')
})

server.listen(PORT, () => {
  console.log ('Server is listening')
})

module.exports = server
