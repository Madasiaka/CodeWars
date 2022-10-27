/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

// number integer, whole/postive
// if num has a whole integer square root - then you return the next highest perfect sq, if not return -1

function findNextSquare(sq) {
    // check if input is perf sq - Math.sqrt() == Math.ceil.sqrt() - return -1 if not, if yes, add one sqrt and multiple by itself
    let sRoot = Math.sqrt(sq)
    if(sRoot === Math.floor(sRoot)){
      sRoot ++
      return sRoot * sRoot
    }
    return -1;
  }
  
  console.log(findNextSquare(9), 16)
  console.log(findNextSquare(121), 144)
  console.log(findNextSquare(122), -1)