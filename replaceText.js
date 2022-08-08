/*An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz" */

//P: string (text) and second string (length one - char)
//R: string with all text turned into the char with same length as original text, if text or char are empty string then return an empty string
//E: contamination("hello", "z") => "zzzzz"
  // contamination("dog", "") => ""
  // contamination("", " ") => ""

  function contamination(text, char){
    // check if !text || !char => return ""; else for loop where let r (empty string) += "char"
    let r = ""
    if(!text || !char){
      return r
    }
    for(let i = 0; i < text.length; i++){
      r += char
    } return r
  }