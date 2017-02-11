class Impact {
  constructor(varX, varY) {
    this.x = varX
    this.y = varY
  }

  distance (imp2) {
    //imp2 is an second impact point.
    var a = imp2.x - this.x
    var b = imp2.y - this.y
    return Math.sqrt(a*a + b*b)
  }
}
module.exports = Impact
