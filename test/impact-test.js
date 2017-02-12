const chai = require('chai')
const constants = require('../lib/constants')
const Impact = require('../lib/impact')

var impact1 = new Impact(7, 2)
var impact2 = new Impact(15, 14)
describe ("Impact", () => {
  it("has positive coordinates", () => {
    // Encapsulate the new
    var myFunc = function() { new Impact('a', 4)}
    chai.expect(myFunc).to.throw(TypeError)
    //myFunc = function(){new Impact(1, 3.14)}

    //chai.expect(new Impact(1, 3.14)).to.throw(TypeError)
  })
  it("has no overreach square", ()=> {
    //chai.expect(new Impact(1, constants.GRID_SIZE+1)).to.throw(RangeError)
    //chai.expect(new Impact(constants.GRID_SIZE+1, 1)).to.throw(RangeError)
  })
  it("must be distant from the other point", ()=> {
    var dist = impact1.distance(impact2)
    chai.expect(dist).to.equal(20)
  })
})
