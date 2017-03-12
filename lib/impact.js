const constants = require ('../config/constants')
/**
* @class
* @classdesc Impact is a square on the grid.
*/
class Impact {
  /**
  * @constructor
  * @param {number} varX is the abscissa of the point in the grid
  * @param {number} varY is the ordinate of the point in the grid
  * @throws {TypeError} if coordinates are not numbers
  * @throws {RangeError} if coordinates are out of bounds
  */
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
    }
  }

  /**
  * Calculates distance, in squares, between two impacts
  *
  * @param {Impact} imp2 is an second impact point.
  * @return {number} the number of squares needed to be crossed successfully,
  *  horizontaly or verticaly (no sideways) to reach imp2 from the current
  *  impact.
  */
  distance (imp2) {
      return (Math.abs(imp2.x - this.x) + Math.abs(imp2.y - this.y))
  }
}
module.exports = Impact
