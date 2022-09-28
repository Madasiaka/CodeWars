/*Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur. */

function maxProduct(numbers, size){
    //sort, return multiplications of array elements 0 to size minus one
    numbers.sort((a,b) => b - a)
    let total = 1
    for(let i = 0; i < size; i++){
      total *= numbers[i]
    }
    return total
  }