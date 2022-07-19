/* Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s) */

function getNumberFromString(s) {
    let num = []
    for(let i = 0; i < s.length; i ++){
        //Note: unsure why the digits here need to be strings, but it didn't work with them set up as numbers
      if(s[i] >= "0" && s[i] <= "9"){
        num.push(s[i])
      }
    }
    return Number(num.join(''));
  }