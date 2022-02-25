//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//P: given an array and a string
//r: true or false (boolean)
//e: include([1, 2, 5, 8], 1) => true
// include([1,2,4], 3) => false
// include([2, 6, 8], 'yellow') => false

function include(arr, item){
    return arr.includes(item)
  }