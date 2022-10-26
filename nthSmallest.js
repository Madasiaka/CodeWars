/*Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

Input >> Output Examples
nthSmallest({3,1,2} ,2) ==> return (2)  */

function nthSmallest(arr, pos){
    //sort then retun index pos - 1
    arr.sort((a,b) => a -b)
    return arr[pos - 1]
  }

  // array of nums (positive, negatives, 0s, repeting, unique) - unsorted, position integer
// return the position'th smallest 

function nthSmallest(arr, pos){
  // .sort(), arr[pos -1]
  return arr.sort((a, b) => a - b)[pos-1]
}

console.log(nthSmallest([1, 4, 3, 2], 3), 3)
console.log(nthSmallest([-100, 100, 52, 37], 2), 37)
console.log(nthSmallest([2, -5, 17, -3, -7, 42], 4), 2)