/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0
*/

function find_average(array) {
    var sum = 0
    if (array == false){
       return 0
    }else {
      array.forEach( x => sum += x)
      return Number(sum/array.length)
    }  
  }