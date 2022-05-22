/*Write a function that returns the total surface area and volume of a box as an array: [area, volume] */

//P: integers (3)
//R: array with two integers (SA and Volume)
//E: getSize(1, 2, 3) => [22, 6]
    //getSize(2, 2, 2) => [24, 8]
    //getSize(2, 3, 6) => [72, 36]
function getSize(width, height, depth){
    //Surface area = (w*h + w*d + d*h)*2, volume = w * d * h
    return [((width * height) + (width*depth) + (depth * height))*2, (width * height * depth)]
  }