//given a number, want to print out every number from 1 to the number, except when an output is divisible by 3 print out "Fizz" or divisible by 5 print out "Buzz"; if divisible by both 3 and 5 then print out "FizzBuzz" string
// fizzbuzz(16) => 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16
//fizzbuzz(2) => 1, 2
//always positive input, integer numbers, array

function fizzBuzz (num){
    let returnArray = []
    for(let i = 1; i <= num; i++){
      if(i%3 ==0 && i%5 ==0){
        returnArray.push("FizzBuzz")
      }else if (i % 3 ==0){
        returnArray.push("Fizz")
      }else if (i % 5 ==0){
        returnArray.push("Buzz")
      }else {
        returnArray.push(i)
      }
    }return returnArray
  }
  
  console.log(fizzBuzz(16))
  console.log(fizzBuzz(2))