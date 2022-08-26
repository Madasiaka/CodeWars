/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
    //split into words
    let words = str.split(' ')
    //split each word into letters, then reverse the letters, then join back to words
    for(let i = 0; i <words.length; i++){
      words[i] = words[i].split('').reverse().join('')
    }
    //place the words back into a string and return
    return words.join(' ')
  }