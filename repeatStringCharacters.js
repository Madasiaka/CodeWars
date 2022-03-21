/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
    let str2 = str.split('')
    let ret = []
    for(let i =0; i<str2.length; i++){
      ret.push(str2[i])
      ret.push(str2[i])
    } 
      return ret.join('')
  }