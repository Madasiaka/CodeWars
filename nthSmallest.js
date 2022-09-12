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