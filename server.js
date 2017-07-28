// My nodejs server
const http = require('http')
const express = require ('express')
const homePage = require('./routes/home.js')
const universPage = require ('./routes/univers.js')
const targetPage = require('./routes/grid.js')
const playPage=require('./routes/play.js')

const constants = require ('./config/constants')

var PORT = process.env.PORT || constants.PORT

var targetApp = express()

targetApp.use(express.static('resources'))
var server = targetApp.listen(PORT, ()=> {
  console.log('Server is listening')
})

targetApp.get('/', homePage)
targetApp.get('/univers/:universName', universPage)
targetApp.get('/target/:targetName', targetPage)
targetApp.get('/target/play/:targetName', playPage)

module.exports = targetApp
