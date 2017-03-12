const constants = require ('../config/constants')
const SQR_SIZE = (constants.IMG_SIZE / constants.GRID_SIZE)
/**
* Translate grid coordinates to pixel on the bacground image.
*
* @param {number} x abscissa or ordinate on the grid
* @return {number} coordinate in the bounding rectangle
*/
squareToPixel (x) {
  return (x-0.5) * SQR_SIZE
}

/**
* Translate coordinates on the image to grid coordinates.
*
* @param {number} x abscissa or ordinate on the grid
* @return {number} coordinate in the bounding rectangle
*/
pixelToSquare (x) {
  return  Math.floor(x / SQR_SIZE + 1
}

}
