/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

//array of numbers
//array of other numbers - no duplicates !KEEP THE FIRST NUMBER!
//E: distinct([2, 1, 1, 2, 1]) => [2, 1]
//distinct([4, 15, 7, 7, 15, 7, 4, 1, 7, 4, 15]) => [4, 15, 7, 1]
//distinct([6]) =>

function distinct(a) {
    //loop through each element and see if it's the last one of it's value
    //splice out THE LAST ONE if so
    //Reset the loop back one because everything will shift "left"
    // return the array
    for (let i = 0; i < a.length; i++){
      if(a.lastIndexOf(a[i]) !== i){
        a.splice(a.lastIndexOf(a[i]), 1);
        i--
      }
    }return a 
  }