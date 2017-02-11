const chai = require('chai')

const Impact = require('../lib/impact')

var impact1
impact1 = new Impact(7, 2)
var impact2 = new Impact(15, 14)

describe ("Impact", () => {
  it("has coordinates", () => {
    chai.expect(impact1.x).to.be.a('number')
    chai.expect(impact1.y).to.be.a('number')
    chai.expect(impact1.x).to.be.gt(0)
    chai.expect(impact1.y).to.be.gt(0)
  })

  it("must be distant from the other point", ()=> {
    var dist = impact1.distance(impact2)
    chai.expect(dist).to.equal(Math.sqrt(208))
  })
})
