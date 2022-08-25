/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

//P: string of length 1 - 1000
//R: string of either the middlemost character (odd number of characters) or middle two characters (even)
//E: getMiddle("test"),"es");
//    getMiddle("testing") =>"t"
//    getMiddle("middle") => "dd"
//    getMiddle("A") => "A"

function getMiddle(s){
    //use modulous to test for even ness then return s position length/2 -1 and length/2 ; return
    if(s.length % 2 == 0){
     return s[(s.length/2) - 1] + s[s.length/2]
    }return s[Math.floor(s.length/2)]
  }