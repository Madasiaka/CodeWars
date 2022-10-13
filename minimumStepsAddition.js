//array of numbers; threshold number 
//at least one num, whole/integer, positives
//add the smallest until equal to or higher than the threshold number, return number of operations to get to that point
function minimumSteps(numbers, value){
    //sort the numbers, loop through adding until equal to or more than value, return the index where it breaks for loop;
    numbers.sort((a,b) => a - b)
    let sum = numbers[0]
    let i = 1
    while( sum < value){
      sum += numbers[i]
      i++
    }return i - 1
  }
  
  console.log(minimumSteps([1, 3, 6, 1, 2], 5), 3)
  console.log(minimumSteps([1, 2, 1, 45], 3), 2)
  console.log(minimumSteps([1, 100, 43, 5], 0), 0)
  