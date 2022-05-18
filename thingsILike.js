
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//P: string or multiple, seperated by commas
//R: long string with leading text "I like" then list, finish with !
//E:  buildString("dogs", "cats") => "I like dogs, cats!"
    //buildString("yellow", "orange") => "I like yellow, orange!"
    //buildString("YOU") => "I like YOU!"

    function buildString(...template){
        //join list with comma and space between, end in an exclamation mark
        return `I like ${template.join(', ')}!`;
      }