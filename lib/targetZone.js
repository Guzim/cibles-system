var impact require("../lib/impact")


class TargetZone {
  constructor (targetSize, colorCode, zoneLegend, impacts) {
    // Check that the impact is a JSON array of coordinates (x,y).
    checkImpactZone(impacts, targetSize)
    // Check that zoneLegend is a "short text"
    if ('string' === Object.prototype.toString.call(zoneLegend)
    // Check that colorCode is a HTML code
    // Check that the coordonates are lower than targetSize
  }
  getcolorcode () {
    return this.colorCode
  }
  getLegend() {
    return this.zoneLegend
  }
  impactZone(coordonates) {
    // Return true if the coordonate is in this TargetZone
  }


  // Check impactZone
  checkImpactZone (impacts, targetSize) {
    try {
      if ('[object Array]' === Object.prototype.toString.call( impacts )) {
        foreach (elem in impacts) {
          if (elem instanceof impact) continue
          else {
            throw new TypeError("Object in impacts table not an impact")
          }
        }
      } else {
        throw new TypeError("Bad type for impacts table")
      }
    } catch (constructorError) {
      /*
      console.log(constructorError.message);      // "null has no properties"
      console.log(constructorError.name);         // "TypeError"
      console.log(constructorError.fileName);     // "Scratchpad/1"
      console.log(constructorError.lineNumber);   // 2
      console.log(constructorError.columnNumber); // 2
      console.log(constructorError.stack);        // "@Scratchpad/2:2:3\n"
      */
      throw (constructorError)

    } finally {

    }
  }
}
