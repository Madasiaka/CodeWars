/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(s1, s2) {
    let array1 = [...s1, ...s2]
    let array2 = []
    for(let i =0; i < array1.length; i++){
      if(!array2.includes(array1[i])){
        array2.push(array1[i])
      }
    }return array2.sort().join('')
  }