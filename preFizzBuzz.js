// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

//P; positive integer greater or equal to one
//R: array of positive integers from one to n
//E: preFizz(1) [1]; preFizz(12) [1,2,3,4,5,6,7,8,9,10,11,12]; preFizz(6) [1,2,3,4,5,6]

function preFizz(n) {
    //for loop, push to empty array then return
      let arr = []
      for(let i = 1; i <= n; i++){
        arr.push(i)
      }return arr
    }