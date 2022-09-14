/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. */ 

//P: array with three numbers
//R: the index of the middle most number (by value) - can be an integer or a float, positive or negative
//E: [2.1, 3.2, 1.4] => 0
  // [-5, -10, -14] => 1
  // [-5.2, -10.6, 14], 0

  function gimme (triplet) {
    //set new high and low variables using Math.max, compare the elements in the triplet to find the one not equal to them and return it's index
      let high = Math.max(...triplet)
      let low = Math.min(...triplet)
      return triplet[0] != high && triplet[0] != low ? 0 : triplet[1] != high && triplet[1] != low ? 1 : 2
    }