// My nodejs server
const http = require('http')
const express = require ('express')
const homePage = require('./routes/home.js')
const universPage = require ('./routes/univers.js')
const targetPage = require('./routes/target.js')
const targetCreatePage = require('./routes/targetcreate.js')

const constants = require ('./config/constants')

var PORT = process.env.PORT || constants.PORT

var targetApp = express()

targetApp.use(express.static('resources'))
var server = targetApp.listen(PORT, ()=> {
  console.log('Server is listening')
})

targetApp.get('/', homePage)
targetApp.get('/univers/:universName', universPage)
targetApp.get('/:universName/:targetName', targetPage)
targetApp.get('/:universName/new/create', targetCreatePage)

module.exports = targetApp
