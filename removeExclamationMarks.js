// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {
    let arr = string.split('')
    for(let i = arr.length; i > 0; i--){
      if(arr[arr.length - 1] == "!"){
        arr.pop()
      }
    }
    
    return arr.join('')
  }