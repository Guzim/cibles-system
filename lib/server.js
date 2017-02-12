// My nodejs server
const http = require('http')
const express = require ('express')

const constants = require ('../lib/constants')
const Target = require ('../lib/target')


var PORT = process.env.PORT || constants.PORT

var targetApp = express()
targetApp.use(express.static('resources'))

targetApp.get('/', (req, res) => {
  req.params
  var myTarget = new Target('Fire target', 'grid-human.png')
  res.render('home.ejs',
    {targetTitle: myTarget.name,
     targetImage: myTarget.background})
})

targetApp.listen(PORT, ()=> {
  console.log('Serve is listening')
})

module.exports = targetApp
