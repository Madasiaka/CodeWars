/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

//P: array of stuff
//R: either empty array (if empty) or new array with count added to the original string
//E: [] -->  []
//   ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//   ["yellow", 'sub', 'marine'] --> ["1: yellow", "2: sub", "3: marine"]

var number=function(array){
    // map - turn into el =`${index + 1}: ` + el
    if(array.length == 0) return []
    let newArray = array.map((el, index) =>  `${index + 1}: ${el}`)
    return newArray
  }