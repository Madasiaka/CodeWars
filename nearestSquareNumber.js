/*Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :) */

function nearestSq(n){
    let x = n
    let y = n
    
    while (x**(1/2) != Math.floor(x**(1/2))){
      x++
    }
    while (y**(1/2) != Math.floor(y**(1/2))){
      y--
    }
    return (x - n) > (n - y) ? y : x
  }