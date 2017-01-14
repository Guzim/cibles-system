// This is a target object
class Target {
  constructor(name) {
    try{
      if ('[object String]' == Object.prototype.toString.apply(name)) {
        this.name = name
      } else {
        throw new TypeError("Bad type for target name")
      }
    } catch (constructorError) {
      console.log(constructorError.message);      // "null has no properties"
      console.log(constructorError.name);         // "TypeError"
      console.log(constructorError.fileName);     // "Scratchpad/1"
      console.log(constructorError.lineNumber);   // 2
      console.log(constructorError.columnNumber); // 2
      console.log(constructorError.stack);        // "@Scratchpad/2:2:3\n"
    }
    this.name = name
  }
}

module.exports = Target
