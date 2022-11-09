/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */

//integer number 
// return a count of how many times you must multiply the digits of num by each other until have whole integer under 10

function persistence(num) {
    //if num < 10 - 0; split-reduce * check if small, if not keep going while loop counter variable
   let counter = 0
     while(num > 9){
       num = num.toString().split('').reduce((a,b) => a * b,1)
       counter ++
     }return counter
   }
 
 console.log(persistence(5), 0)
 console.log(persistence(25), 2)
 console.log(persistence(999), 4)