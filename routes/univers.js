/*
URI : <base_path>/univer/<univers-name>
Display a caroussel of grids
Display a + to add grid (?)
*/

function universPage(req, res) {
  /*
   check the name. Get the univer yaml
  */
  console.log (req)
    res.render('univers.ejs', {
      req: req
    })
}
module.exports = universPage
