/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */
//string may contain letters x or o of any case
// return boolean true/false if equal num of xs and os including 0 of each

function XO(str) {
    //copy string, spread into array, filter - turn lowercase count for x, filter lowercase count for o, compare counts and return if equal
  let Arr = [...str]
  
  let xCount = Arr.filter(el => el.toLowerCase() == 'x').length
  let oCount = Arr.filter(el => el.toLowerCase() == 'o').length
  
  return xCount == oCount 
}

console.log(XO('xxoo'), true)
console.log(XO('xxxxxxxxoO'), false)
console.log(XO('ssddgdfhjelk'), true)