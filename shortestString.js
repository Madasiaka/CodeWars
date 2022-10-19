/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    //map el => el.length return Math.max - spread array
    let lengths = s.split(' ').map(el => Number(el.length))
    return Math.min(...lengths)
  }
  
  console.log(findShort('hello fr'), 2)
  console.log(findShort("Let's travel abroad shall we"), 2);
  console.log(findShort('hello why dont you work though you dumb array'), 3)