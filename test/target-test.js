// Test a target
const chai = require('chai')
//require('./helpers/image-helper')
const readChunk = require('read-chunk')
const imageType = require('image-type')
const sizeOfImage = require('image-size')

const Target = require('../lib/target')

//var myTarget = new Target('Fire target',
// '/Users/selim/Documents/Programmation/target/target-src/cibles-system/
// resources/grid-human.png')
var myTarget = new Target('Fire target', './resources/grid-human.png')
describe('Target', () => {
  it ('has a name', () => {
    //chai.myTarget.name.shoulb.be.a('[object String]')
    chai.expect(myTarget.name).to.be.a('string')
  })

  it('has an image for backround', () => {
    //var targets[] = {new Target('')}
    //tester fichier pas image, mauvaise taille, ...
    // Read the 12 first caracters where the mime is stored

    chai.expect(imageType(readChunk.sync(myTarget.background, 0, 12)).mime)
      .to.have.string('image')
  })
  it('has a square image for background', () => {
    // image length and width must be equals
    var dimensions = sizeOfImage(myTarget.background)

    chai.expect(sizeOfImage(myTarget.background).width).
      to.equal(sizeOfImage(myTarget.background).height)
  })
  it('has at least one zone')
  it('zones must be strictely distincts')
})
