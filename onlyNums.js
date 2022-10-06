//P: string of mixed numbers and letters/special chars
/*Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur. */

//R: Number with just the numbers removed from the original string (in order)
//E: filter("12345") => 12345
//   filter("ab3ndk5kfno9") => 359
//   filter('abnfaiouieognioe') => 

var filterString = function(value) {
    //split string via "" then filter if == Number(), join back via "" and return to numerical form from string
    let array = value.split('')
    return +array.filter(el => Number(el) == el).join('')
  }