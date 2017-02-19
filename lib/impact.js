const constants = require ('../lib/constants')
class Impact {
  constructor(varX, varY) {
    this.x = 1
    this.y = 1
    try {
      if (('number' === typeof varX) && ('number' === typeof varY)) {
        this.x = varX
        this.y = varY
      }
      else {
        throw new TypeError('Bad type for impact coordinates')
      }

      if ((this.x > constants.GRID_SIZE) || (this.y > constants.GRID_SIZE) ||
          (this.x < 1) || (this.y < 1)) {
            throw new RangeError ('Impact out of bound')
      }
    } catch (constructorError) {
       throw (constructorError)
      /*
      console.log(constructorError.message);      // "null has no properties"
      console.log(constructorError.name);         // "TypeError"
      console.log(constructorError.fileName);     // "Scratchpad/1"
      console.log(constructorError.lineNumber);   // 2
      console.log(constructorError.columnNumber); // 2
      console.log(constructorError.stack);        // "@Scratchpad/2:2:3\n"
      */
    }
  }

  distance (imp2) {
    //imp2 is an second impact point.
    // Return the number of squares needed to be crossed successfully,
    // horizontaly or verticaly (no sideways) to reach imp2 from the current
    // impact.
    var a = Math.abs(imp2.x - this.x)
    var b = Math.abs(imp2.y - this.y)
    return (a + b)
  }
  px(){
    var squareSize = constants.IMG_SIZE/constants.GRID_SIZE
    return JSON.stringify ({ pxX: squareSize * this.x - squareSize/2, 
      pxY: squareSize * this.y - squareSize/2 })
  }
}
module.exports = Impact
