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
  fs.writeFileSync("./data/targets/" + data.name +".yml", YAML.safeDump(toSave), "UTF-8")
  var univers
  try {
    univers = YAML.safeLoad(fs.readFileSync('./data/' +
      data.univers + '.yml',
      'utf8'), {json: true})
  } catch (e) {
    console.log(e)
  }
  univers.targets.push({ "name": data.name, "description" : "",
                          "backgroundImage": data.backgroundImage })
  fs.writeFileSync("./data/" + data.univers +".yml", YAML.safeDump(univers), "UTF-8")
}

module.exports = manageSockets
