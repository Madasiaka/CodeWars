//Your task is to sum the differences between consecutive pairs in the array in descending order.

//For example:

//sumOfDifferences([2, 1, 10])
//Returns 9

//Descending order: [10, 2, 1]

//Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

//If the array is empty or the array has only one element the result should be 0

//P: Always get numbers? Empty arrays? Strings?

//R: return a single number (sum of the differences)

//E: Given [6, 4, 2] return 2 +2 = 4
// Given [4, 8, 12] return 4 + 4  = 8
//Given [30, 15, 20] return 10 + 5 + 15

//P: sort the array to decreasing order, subtract numbers in order, add those, return the sum

function sumOfDifferences(arr) {
    let arr2 = []
  let temp = arr.sort((a,b) => a - b)
  if(temp.length >= 2){
  for(let i = 0; i < temp.length - 1; i++){
    arr2.push(temp[i] - temp[i+1])
  }return Math.abs(arr2.reduce((a,b) => a+b))
    }else {
      return 0
    }
}