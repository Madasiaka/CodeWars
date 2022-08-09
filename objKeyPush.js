/*Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code */


function giveMeFive(obj){
    let five = []
    for(let word in obj){
      if(word.length == 5){
        five.push(word)      
      }
      if(obj[word].length == 5){
          five.push(obj[word])
      }
    } return five
  }