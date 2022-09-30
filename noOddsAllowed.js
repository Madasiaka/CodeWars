/*Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given. */

//P: array of integers
//R: all even integers in a new array
//E: [0,1] => [0]
//   [1, 3, 4, 3] => [4]
//   [2, 4, 6, 8] => [2, 4, 6, 8]

function noOdds( values ){
    // filter element modulous 2 == 0
    return values.filter(el => el % 2 == 0)
  }