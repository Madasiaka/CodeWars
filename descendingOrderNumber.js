/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

//given a number (integer)
//return a new number that's is the greatest number possible

function descendingOrder(n){
    //split, sort, reverse, join
    return +(String(n)).split('').sort((a, b) => b - a).join('')
  }
  
  console.log(descendingOrder(1234), 4321) 
  console.log(descendingOrder(249310), 943210)
  console.log(descendingOrder(5), 5)