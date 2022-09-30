/*Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes . */

function maxGap (numbers){
    //sort, loop and compare to max number
    numbers.sort((a,b) => b - a)
    let max = 0
    for(let i = 0; i < numbers.length - 1; i++){
      if((numbers[i] - numbers[i+1]) > max){
        max = numbers[i] - numbers[i+1]
      }
    }return max
  }