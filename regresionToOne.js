/*https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript#:~:text=Digital%20root%20is,non%2Dnegative%20integer. */

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