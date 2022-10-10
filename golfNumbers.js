/* Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

 */

//P: number - always positive
//R: true/false boolean; true if each number is less or equal to the number before it
//E: tidyNumber (13579) ==> return (true)
//   tidyNumber (1024) ==> return (false)
//   tidyNumber (12) ==> return (true)

function tidyNumber(n){
    // turn number into an array (string it first), split by '', loop through to make sure it's always equal/less than numbers after it
    let array = String(n).split('')
    for(let i =0; i < array.length; i++){
      if(array[i] > array[i+1]){
        return false
      }
    }return true
  }