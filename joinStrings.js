//P: two strings, or a number that must be turned into a string
//R: one joined string - cannot use .join() or .concat() - must have space between them
//E: join('Hello', 2) => "Hello 2"
  // join('1259', 'go team') => '1259 go team'
  // join('hello', 'world') => 'hello world'

  function joinStrings(string1, string2){
    // use the template literal string 1 string 2
   return `${string1} ${string2}`
 }