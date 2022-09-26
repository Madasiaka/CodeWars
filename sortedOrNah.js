/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

//an array of numbers
//see if it is in order or not
//sort([1, 2]) => 'yes, ascending'
//sort([15, 7, 3, -8]) => 'yes, descending'
//sort([1, 7, 5]) => 'no'

function isSortedAndHow(array) {
    //copy x2 and spread array, send it though sort, send it through sort backwards compare using JSON stringify
    let forwards = [...array].sort((a, b) =>a - b)
    let backwards = [...forwards].reverse()
    return JSON.stringify(array) == JSON.stringify(forwards)? 'yes, ascending' : JSON.stringify(array) == JSON.stringify(backwards)? 'yes, descending' : 'no'
    
  }