/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

//P: given a string of at least one length
//R: two seperate strings in an array - first with all even inputs uppercased, second with all odd ones
//E: "abcdef" => ["AbCdEf", "aBcDeF"]
//   "hello" => ["HeLlO", "hElLo"]
//   codewarriors" => ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
function capitalize(s){
    //set up two empty word variables, for loop 0 to length counting by 2 - upperCase; then for loop counting from 1 with 2 increment; add to 
    let even = s.split('') , odd = s.split('')
    for(let i = 0; i < s.length; i= i + 2){
      even[i] = even[i].toUpperCase()
    }
    for(let j = 1; j < s.length; j = j + 2){
      odd[j] = odd[j].toUpperCase()
    }
    return [even.join(''), odd.join('')];
  };