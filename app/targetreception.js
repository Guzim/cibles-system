var YAML=require('js-yaml')
var fs=require('fs')

function manageSockets(socket) {
  // Target reception
  socket.on('send target', (data)=>{
    saveTarget(data)
    //socket.emit('Validation', 'OK')
  })
}

function saveTarget(data) {
  toSave = JSON.parse(JSON.stringify(data))
  delete toSave.univers
  fs.writeFileSync("./data/targets/" + toSave.name +".yml", YAML.safeDump(toSave), "UTF-8")
  var univers
  try {
    univers = YAML.safeLoad(fs.readFileSync('./data/' +
      data.univers + '.yml',
      'utf8'), {json: true})
  } catch (e) {
    console.log(e)
  }
  univers[data.univers].targets.push({ "name": toSave.name, "description" : "",
                          "backgroundImage": toSave.backgroundImage })
  fs.writeFileSync("./data/" + data.univers +".yml", YAML.safeDump(univers), "UTF-8")
}

module.exports = manageSockets
