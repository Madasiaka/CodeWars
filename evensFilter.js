/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */
//P: an array of integers
//R: a new array with just the even numbers returned
//E: evens([2, 3, 5, 6, 8]) => [2, 6, 8]
//   evens([5, 7, 9, 11]) => []
//   evens([2, 4, 6, 8, 10]) => [2, 4, 6, 8, 10]

function getEvenNumbers(numbersArray){
    // filter function elements modulous 2 == 
    return numbersArray.filter(el => el % 2 == 0)
  }