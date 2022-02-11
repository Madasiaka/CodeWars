// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let longest = array[0]
    for(let i = 0; i < array.length; i++){
      if(String(array[i]).length > String(longest).length){
        longest = array[i]
      }
    }return longest
  }