/*Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34 */


//P: valid float numbers
//R: output a valid float rounded to two decimal places
//E: twoDecPlaces(5.6987452) => 5.70
  //twoDecPlaces(6.529)=> 6.53
  //twoDecPlaces(5) => 5.00


  function twoDecimalPlaces(n) {
    // toFixed(2), make sure it returns a number not a string
    return +n.toFixed(2)
  }