// Test a target
const chai = require('chai')
const Target = require('../lib/target')

var myTarget = new Target('Fire target')
describe('Target', () => {
  console.log (myTarget)
  it ('has a name', () => {
    //chai.myTarget.name.shoulb.be.a('[object String]')
    chai.expect(myTarget.name).to.be.a('string')
  })
  it('has a square image for backround')
  it('has at least one zone')
  it('zones must be strictely distincts')

})
