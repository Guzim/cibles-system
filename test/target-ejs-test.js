//Tests on the home page
const chai = require('chai')
const chaihttp = require('chai-http')
chai.use(chaihttp)
const should = chai.should()
const expect = chai.expect
const asser = chai.assert


var server = require("../server")
describe('Entry parameters', ()=>{
  it('Should have the intial impact in entry parameters')
  it('Should have the adjustement in entry parameters')
  it('should have the target object id in entry parameters')
})
describe('Target image', ()=>{
  it('should be displayed full screen on mobile')
  it('the initial impact should be visible on the grid')
})
describe('Mouseover behavior on the target', ()=>{
  describe('Square under the mouse', ()=> {
    it('should be greyed if the distance to the impact is lower than adjustement')
    it('shouldn\'t be greyed if the distance to the impact is higher than adjustement')
    it('shouldn\'t change anything outside the grid')
    it('should print the distance to the impact on a label under the grid')
  })
})
describe('Click behavior on the target', ()=>{
  it('should black definitively the square')
  it('should be the only black square')
  it('should remove any black square if the click is outside the range')
  it('should print the adjusted impact coordinates under the grid')
  it('should remove the label with coordinate if the black square disapear')
})
describe('Buton \'Send modified\' impact management', ()=>{
  it('should go back to the ??? page')
})
