/*
URI : <base_path>/target/<target-name>
Display a grid
Display the "ajustement"
Capacity to click in a area <=ajustement
Display the distance ? Non
Display the result of the zone.
*/
var YAML=require('js-yaml')
var fs=require('fs')

function targetPage(req, res) {
  /*
   check the name
   get the target yaml
  */
  var doc
  try {
    doc = YAML.safeLoad(fs.readFileSync('./data/targets/' +
      req.params.targetName + '.yml',
      'utf8'), {json: true});
  } catch (e) {
    console.log(e);
  }

  res.render('target.ejs', {
    targetName: req.params.targetName,
    targetData: JSON.stringify(doc, null)
  })
}

module.exports = targetPage
