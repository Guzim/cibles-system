const constants = require ('../config/constants')

/**
* @class
* @classdesc {Target} is a GRID_SIZE x GRID_SIZE square. It has a background
*   image to represent the target. The player can hit the target to an initial
*   {Impact}. Each square belongs to a "zone". The sverity of the impact depends
    on the "zone".
*/
class Target {
  /**
  * @desc The Target is a GRID_SIZE x GRID_SIZE square. It has a becground
  * image
  * @constructor
  * @param {String} name is the name of the target.
  * @param {URL} background is a URL for the background image
  * @throws {TypeError} if the name is not a String
  */
  constructor(name, background) {
    try {
      this.name = this.nameManagement(name)
      this.background = this.backgroundManagement(background)
    } catch (constructorError) {
      throw (constructorError)
    }
  }

  /**
  * @desc nameManagement assign {name} to the object if {name} id correct.
  * @param {String} name name to be checked
  * @throws {TypeError} if the name is not a String
  */
  nameManagement(name) {
    try{
      if ('[object String]' == Object.prototype.toString.apply(name)) {
        this.name = name
      } else {
        throw new TypeError("Bad type for target name")
      }
    } catch (constructorError) {
      throw (constructorError)
    }
    return name
  }

  /**
  * @desc backgroundManagement assign {background} to the object if it's correct
  * @param {String} background image to be checked
  * @throws {TypeError} if the name is not a String
  */  backgroundManagement(background) {
    return background
  }
}
module.exports = Target
