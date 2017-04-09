// Get the univers
var YAML=require('js-yaml')
var fs=require('fs')

try {
  var doc = YAML.safeLoad(fs.readFileSync('./data/univers.yml', 'utf8'), {json: true});
} catch (e) {
  console.log(e);
}

function homePage(req, res) {
  res.render('home.ejs', {
    universList: JSON.stringify(doc, null)
  })
}

module.exports = homePage
