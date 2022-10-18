/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

//given an array has numbers as integers and as strings
//return a number that's the sum of all array elements

function sumMix(numsArray){
    //map method explicit type conversion to Numbers, reduce to sum, return number
    return numsArray.map(el => Number(el)).reduce((acc, sum) => acc + sum, 0)
}

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 