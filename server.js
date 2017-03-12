// My nodejs server
const http = require('http')
const express = require ('express')

const constants = require ('./config/constants')
const Target = require ('./lib/target')
const Impact = require ('./lib/impact')
const oAuth2 = require ('./lib/connect.js')


var PORT = process.env.PORT || constants.PORT

var targetApp = express()
targetApp.use(express.static('resources'))
var server = targetApp.listen(PORT, ()=> {
  console.log('Server is listening')
})
targetApp.get('/', homePage)
targetApp.get('/target', targetPage)

var everyone = require('now').initialize(server)

// module.exports = targetApp

function targetPage(req, res) {
  var myTarget = new Target('Fire target', 'whitewolf.jpg')
  var myImpact = new Impact(12,5)
  res.render('target.ejs', {
   targetTitle: myTarget.name,
   targetImage: myTarget.background,
   targetIImpX: myImpact.x,
   targetIImpY: myImpact.y,
   targetImp: myImpact, // Ajout
   targetAdjustement: 6,
   targetSquareSize: constants.IMG_SIZE/constants.GRID_SIZE
  })
}

function homePage(req, res) {
  res.render('home.ejs')
}
