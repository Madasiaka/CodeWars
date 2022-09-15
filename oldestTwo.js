/*The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10] */

// P: array of two or more items, could be same numbers though
// R: two oldest/oldest ages within the array of ages passed in.
// E: [1, 2, 10, 8] --> [8, 10]
//    [1, 5, 87, 45, 8, 8] --> [45, 87]
//    [1, 3, 10, 0]) --> [3, 10]

function twoOldestAges(ages){
    //sort array, then return age.length-2 and age.length-1
      let total = ages.length
      let sorted = ages.sort((a,b) => a - b)
      return [sorted[total-2], sorted[total - 1]]
    }
    