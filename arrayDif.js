/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

//two arrays, with some number of overlapping
// return first array without any overlap from array2

function arrayDiff(a, b) {
    //filter a if includes b
    return a.filter(el => !b.includes(el))
  }
  
  console.log(arrayDiff([1,2,3,4,3,2,1], [1,4]), [2,3,3,2])
  console.log(arrayDiff([2,8,8,8,8,8,5], [8]), [2,5])
  console.log(arrayDiff([1,2,2,30], [4]), [1,2,2,40])