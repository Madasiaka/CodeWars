/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

//given a number - positive or negative
//return a sum of all numbers below that number that are multiples of 3 or 5, or return 0

function solution(number){
    //fizzbuzz = set it up so loop from number down into array, reduce that array, ifs/elses
    let correctNums = []
    for(let i = 3; i < number; i++){
      if( i % 3 == 0){
        correctNums.push(i)
      }else if( i % 5 == 0){
        correctNums.push(i)
      }
    } return correctNums.reduce((a, b) => a + b, 0) 
  }