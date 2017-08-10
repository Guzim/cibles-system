/*
URI : <base_path>/univer/<univers-name>
Display a caroussel of grids
Display a + to add grid (?)
*/
// Get the single univers
var YAML=require('js-yaml')
var fs=require('fs')

function universPage(req, res) {
  // Check the univers exists in the list
  var doc
  try {
    doc = YAML.safeLoad(fs.readFileSync('./data/univers.yml',
      'utf8'), {json: true});
  } catch (e) {
    console.log(e);
  }

  var thisunivers = { name: "", description: "", backgroundImage: "" }
  for (let u of doc) {
    if (req.params.universName == u.name) {
      thisunivers.name = u.name
      thisunivers.description = u.description
      thisunivers.backgroundImage = u.backgroundImage
      break;
    }
  }
  if (!thisunivers.name) {
    //404
    console.log("Pas de " + req.params.universName + " dans la liste des univers")
    return
  }
  // Get data for the univers
  var docUnivers
  try {
    docUnivers = YAML.safeLoad(fs.readFileSync('./data/' + thisunivers.name + '.yml',
      'utf8'), {json: true});
  } catch (e) {
    console.log(e);
    //404
    return
  }

  res.render('univers.ejs', {
    universData: JSON.stringify(docUnivers, null),
    thisUnivers: JSON.stringify(thisunivers, null)
  })
}

module.exports = universPage
