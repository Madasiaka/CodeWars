/* Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) */

function minSum(arr) {
    // sort it by size: multiply first and last, second and second last etc then sum
    arr.sort((a,b) => a -b)
    let j = arr.length - 1
    let total = 0
    for(let i = 0; i < arr.length/2; i++){
      total += arr[i] * arr[j]
      j--
    } return total
  }