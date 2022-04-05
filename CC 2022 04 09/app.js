//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

//If they are, change the array value to a string of that vowel.

//Return the resulting array.

//P: Always just numbers? Find the ascii code for lowercase vowels, 
//R: return an array of numbers (if not vowel) or string vowel
//E: [15, 97, 102, 117] would return [15, "a", 102, "u"]
//P: loop through all the arguments, return string vowel if match parameters, otherwise just return the number

function isVow(a){
    let temp = []
    for(let i = 0; i < a.length; i++){
      if(a[i] === 97){
        temp.push("a")
      }else if(a[i] === 101){
        temp.push("e")
      }else if(a[i] === 105){
        temp.push('i')
      }else if(a[i] === 111){
        temp.push('o')
      }else if(a[i] === 117){
        temp.push('u')
      }else{
        temp.push(a[i])
      }
    }return temp
  }