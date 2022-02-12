//P: array with numbers
//R: array minus the smallest/first smallest number
//E:  Input: [1,2,3,4,5], output= [2,3,4,5]
//    Input: [5,3,2,1,4], output = [5,3,2,4]
//    Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    //set empty variable to track index, a starting lowNumber equal to the first number; loop through checking if preset low is less than num[i]  - if yes update index and low number, after loop slice(i,1) then return
    let index 
    let lowNum = numbers[0]
    for (let i = 1; i < numbers.length; i++){
      if(numbers[i] < lowNum){
        index = i;
        lowNum = numbers[i]
      } 
    } 
    numbers.splice(index,1)
    return numbers
  }