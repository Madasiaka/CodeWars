//P: given an array of strings with differing lengths
//R: new array with the strings in order of shortest to longest
//E: sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
//   sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
//   sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"])

function sortByLength (array) {
    //use the sort function with the length characteristic called out
   return array.sort((a,b) => a.length - b.length)
  };