/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

//#STRING

//P: string of numbers seperated by a space; at least one number no non numbers
//R: high and low number (as a string)
//E: num("1 3 8") => "8 1"
//   num("1 2 -3 4 5") => "5 -3"
//   num("1 9 3 4 -5") => "9 -5"

function highAndLow(numbers){
    // split the string via " "; sort them with method; take [0] and [length-1] and put in string return
    let range = numbers.split(' ').sort((a,b) => a - b)
    return `${range[range.length-1]} ${range[0]}`
  }