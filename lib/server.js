// My nodejs server
const http = require('http')
const express = require ('express')

const constants = require ('../lib/constants')
const Target = require ('../lib/target')
const Impact = require ('../lib/impact')


var PORT = process.env.PORT || constants.PORT

var targetApp = express()
targetApp.use(express.static('resources'))

targetApp.get('/', targetpage)

targetApp.listen(PORT, ()=> {
  console.log('Server is listening')
})

module.exports = targetApp

function targetpage(req, res) {
 var myTarget = new Target('Fire target', 'grid-human.png')
 var myImpact = new Impact(5, 2)
 res.render('target.ejs', {
   targetTitle: myTarget.name,
   targetImage: myTarget.background,
   targetIImpX: myImpact.x,
   targetIImpY: myImpact.y,
   targetAdjustement: 6,
   targetSquareSize: myImpact.px()
  })
}
