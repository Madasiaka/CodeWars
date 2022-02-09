/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */

// given an array of numbers - always numbers, integers, possitive
//return an integer of average - rounded down


function getAverage(marks){
    //reduce (sum it up) then divide by marks.length, use floor to round down
    return Math.floor([...marks].reduce((a,b) => a + b)/(marks.length))
  }
  
  
  console.log(getAverage([1, 2, 3, 3, 2, 1]), 2)
  console.log(getAverage([1]), 1)
  console.log(getAverage([5, 4, 5, 4]), 4)