/*Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]. */

//P: multi level array of integers that is unsorted, only nest one deep
//R: single level array with the elements sorted small -> large
//E: flatSort([[], []]) => []
//   flatSort([[], [1,2]]) => [1,2]
//   flatSort([100], [2, 5, 10, 3], []) => [2, 3, 5, 10, 100]

function flattenAndSort(array) {
    //use flat() then sort()
    return array.flat().sort((a,b) => a -b);
  }