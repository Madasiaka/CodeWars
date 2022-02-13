/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

//P: two strings
//R: boolean of if str1 ends with ending string
//E: solution('abc', 'bc') => true
//   solution('abc', 'd') => false
//   solution('dog', 'g') => true
function solution(str, ending){
    // str to array then slice to be same length as ending, then === compare them
    if(ending == '') return true
    str = str.split('').slice(-(ending.length)).join('')
     return str === ending
  }