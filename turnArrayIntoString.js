//Input: Array of elements

//["h","o","l","a"]

//Output: String with comma delimited elements of the array in th same order.

//"h,o,l,a"

//P: always strings? Ever numbers? Empty array?
//R: return a string with inputs deliniated by a comma
//E: if we are given ["h","o","l","a"], should return "h,o,la"
// if we are given ["g","o","g","g","e","t"] should return "g,o,g,e,t"
// if we are given ["y","e","s"] should return "y,e,s"

//P: join the parts of the array as a string using a comma delinator + return

function printArray(array){
    return array.join(',')
  }

  console.log(printArray(["g","o","o","d"]), "g,o,o,d")