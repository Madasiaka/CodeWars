/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :) */

//P: nested arrays in an overarching array
//R: sum of all the smallest numbers for each inner array
//E: sum([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) => 9
//   sum([[1,2,3,4], [1,1,1,2], [1,5, 4, 12]]) => 4
//   sum([[-4, 5, 10], [1, 3, -6], [22, 0, 12]]) => 20

function sumOfMinimums(arr) {
    //loop of array.length to sort inner arrays - then add all array[0]s together to an empty total value
    let total = 0
    for(let i = 0; i < arr.length; i++){
      let temp = arr[i].sort((a,b) => a - b)
      total += temp[0]
    }return total
  }