//When provided with a letter, return its position in the alphabet.

//P: letter (single character string)
//R: integer from 1 to 26 representing it's position in the alphabet
//position("a") => "Position of alphabet: 1"
//position("z") => "Position of alphabet: 26"
//position("e") => "Position of alphabet: 5"

function position(letter){
    //Return the char code of the letter, then convert to a position in the alphabet. Alphabet letters are from ascii 97 to 122, so will need to subtract 96 from returned code. Put into a string and return
      return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
    }