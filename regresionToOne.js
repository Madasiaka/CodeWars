/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer. */

// given a number
// return a number that is composed of all digits summed until single integer basically 


function digitalRoot(n) {
    // turn number into a string, split(''), reduce it, under 10? if not go again
    n = String(n).split('').reduce((a,b) => a + +b, 0)
    if( n < 10){
      return n
    }else {
      return digitalRoot(n)
    }
  }
  
  console.log(digitalRoot(132189), 6)
  console.log(digitalRoot(456), 6)
  console.log(digitalRoot(493193), 2)