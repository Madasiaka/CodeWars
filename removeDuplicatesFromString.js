/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'*/

function removeDuplicateWords (s) {
    let words = s.split(' ')
    let singles = []
    for(let i = 0; i < words.length; i++){
      if(!singles.includes(words[i])){
        singles.push(words[i])
      }
    }return singles.join(" ")
  }