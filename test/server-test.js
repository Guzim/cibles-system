// Use Mocha, Chai and Chai-http.
// Test some things on Server side
const chai = require('chai')
const chaihttp = require('chai-http')
chai.use(chaihttp)
const should = chai.should()
const expect = chai.expect
const asser = chai.assert

var server = require("../lib/server")

describe('Server', () => {
  it('Up and running', () => {
    chai.request(server)
      .get('/')
      .end( (err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
      })
  })
})
