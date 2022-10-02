/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers. */

//P: array of integers
//R: a new array of integers of length number with the even integers from the end of the original array
//E: evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//   evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//   evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
    // filter the array to just evens; starting for loop at new filter.length remove first elements equal to number
    let newArray = array.filter(el => el % 2 == 0)
    for (let i = newArray.length; i > number; i--){
      newArray.shift()
    }
    return newArray
  }