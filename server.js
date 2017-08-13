// My nodejs server
const http = require('http')
const express = require ('express')

const constants = require ('./config/constants')

var PORT = process.env.PORT || constants.PORT

var targetApp = express()
var server = http.Server(targetApp)
var io = require("socket.io")(server)

targetApp.use(express.static('resources'))
server.listen(PORT, ()=> {
  console.log('Server is listening')
})

// Routage
const homePage = require('./routes/home.js')
const universPage = require ('./routes/univers.js')
const targetPage = require('./routes/target.js')
const targetCreatePage = require('./routes/targetcreate.js')

targetApp.get('/', homePage)
targetApp.get('/univers/:universName', universPage)
targetApp.get('/:universName/:targetName', targetPage)
targetApp.get('/:universName/new/create', targetCreatePage)

const manageSockets = require('./app/targetreception.js')
io.on('connection', manageSockets)

module.exports = targetApp
