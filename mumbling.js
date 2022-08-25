/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

//P: given a string of upper/lowercase characters
//R: first char is capitalized then dash then second is repeated twice (first with capital) etc through whole string
//E: accum("abcd") -> "A-Bb-Ccc-Dddd"
//   accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//   accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	// split up string to characters; loop through turning it into a repeat statement; join array via '-'
  let arr = s.split('')
  //Make first character for each array item (upper case)
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase()
  }
  //Add the lowercase ones
  for(let j = 1; j < arr.length; j++){
    //repeat the lowercase ones j number of times
    arr[j]+= arr[j].toLowerCase().repeat(j)
  }
    return arr.join('-')
}