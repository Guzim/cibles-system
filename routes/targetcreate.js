var YAML=require('js-yaml')
var fs=require('fs')

function targetCreatePage(req, res) {
  /*
   check the name
   get the target yaml
  */
  var listImg
  try {
    listImg = ""
  } catch (e) {
    console.log(e);
  }

  res.render('targetcreate.ejs', {
    universName: req.params.universName,
    targetData: JSON.stringify(doc, null)
  })
}

module.exports = targetCreatePage
