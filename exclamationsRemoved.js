/*Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!" */

//P: non empty string
//R: a new string with no "!" except one at the end
//E: remove("I! LIKE! YOU") => "I LIKE YOU!"
  //remove("how! are! we! doing??") =>"how are we doing??!"
  //remove('hello') => "hello!"


  function remove (string) {
    //split via "!", join via "", concat a ! on the end
    return string.split('!').join('') + "!"  
  }