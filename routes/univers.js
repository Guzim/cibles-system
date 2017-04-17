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
  var thisunivers = { 'name': req.params.universName,
                      'description':'',
                      'backgroundImage': ''
                    }
  var doc
  try {
    doc = YAML.safeLoad(fs.readFileSync('./data/univers.yml',
      'utf8'), {json: true});
  } catch (e) {
    console.log(e);
  }
  for (let u of doc.univers) {
    console.log("mon debug: " + JSON.stringify(thisunivers) + " compare to  " + JSON.stringify(u))
    if (thisunivers.name == u.name) {
      thisunivers.description = u.description
      thisunivers.backgroundImage = u.backgroundImage
    }
  }

  if (!thisunivers.backgroundImage) {
    //404
    console.log("Pas de " + thisunivers.name + " dans la liste des univers")
    return
  }


  // Get data for the univers
  try {
    doc = YAML.safeLoad(fs.readFileSync('./data/' + thisunivers.name + '.yml',
      'utf8'), {json: true});
  } catch (e) {
    console.log(e);
    //404
    return
  }
  res.render('univers.ejs', {
    universData: JSON.stringify(doc, null),
    thisunivers: JSON.stringify(thisunivers)
  })
}

module.exports = universPage
