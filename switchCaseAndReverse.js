/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces. */

// string english, spaces
// return new string characters switched in case and words in opposite order

function stringTransformer(str) {
    // to array, map through upperCase to Lowercases etc, reverse order, join into string and return
    let words = str.split(' ').reverse()
    for(let i =0; i < words.length; i++){
      words[i] = [...words[i]].map(el => el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
    }
    return words.join(' ')
    
  }
  
  console.log(stringTransformer('hello world'), 'WORLD HELLO')
  console.log(stringTransformer('This is FUN'), 'fun IS tHIS')
  console.log(stringTransformer('AhaAHah    kool'), 'KOOL   aHAahAH')