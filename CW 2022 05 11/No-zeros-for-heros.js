/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/


function noBoringZeros(n) {
    let a = `${n}`.split('')
    for(let i = a.length-1; i > 1; i--){
      if(a[i] == 0){
        a.pop()
      }else{
        break
      }
    }return Number(a.join(''))
  }