/* Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop. */


//P: array of integers
//R: two arrays - one of odd numbers, one of even numbers in an overall array
//E: pickIt([1, 3, 4, 6]) => ([[1, 3], [4,6]])
    //pickIt([2,4,6,8]) => ([[],[2,4,6,8]])
    //pickIt([5,6,7,80]) => [[5,7], [6,80]]

function pickIt(arr){
    //empty arrays for odd and even
    var odd=[],even=[];
    //for loop from 0 to arr.length
    for(let i = 0; i < arr.length; i++){
        //decide if even or odd, push to correct array
      if(arr[i] % 2 == 0){
        even.push(arr[i]);
      }else{
        odd.push(arr[i]);
      }
    }
    //return both arrays in an array
    return [odd,even];
  }