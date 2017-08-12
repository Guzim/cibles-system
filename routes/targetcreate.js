var YAML=require('js-yaml')
var fs=require('fs')

function targetCreatePage(req, res) {
  res.render('targetcreate.ejs', {
    universName: req.params.universName,
  })
}

module.exports = targetCreatePage
