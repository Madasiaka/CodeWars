// word - a string, uppercase or lowercase letters, as well as characters
// string - with all chars changed to either "(" if unique or ")" if repeated

function duplicateEncode(word){
    // word split (''), map el => index == lastindex
  word = word.toLowerCase().split('')
  return word.map(el => word.indexOf(el) == word.lastIndexOf(el) ? "(" : ")").join('')
}

console.log(duplicateEncode('din'), `(((`)
console.log(duplicateEncode('racecar'), ')))()))')
console.log(duplicateEncode('Succulents'), ")))))(((()")