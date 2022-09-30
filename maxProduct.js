/*Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes . */

//P: integers in an array
//R: highest product from multiplying two integers in order
//E: [1, 2, 3] => 6
//   [1, -3, -3, 2] => 9
//   [-1, -1 , -1, 0] => 0

function adjacentElementsProduct(array) {
    //set up a loop, set up a max number, go through and change max to product if higher, return max
    let initial = array[0] * array[1]
    for (let i = 1; i < array.length; i++){
      if((array[i] * array[i+1] ) > initial){
        initial = array[i] * array[i + 1]
      }
    }return initial
  }