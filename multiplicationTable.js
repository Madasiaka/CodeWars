/* Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests. */

//P: parameters
  //always an integer (num)
//R: returns
  //return a string with /n between lines: multiplication table from 1 to 10 of num
//E: examples
  //multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
  //multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');
  ////multiTable(5), '1 * 6 = 6\n2 * 6 = 12\n3 * 6 = 18\n4 * 6 = 24\n5 * 6 = 30\n6 * 6 = 36\n7 * 6 = 42\n8 * 6 = 48\n9 * 6 = 54\n10 * 6 = 60');
//P: psuedocode


function multiTable(num) {
    // loop
    //multiply num by 1-10
    let result =''
    for(let i = 1; i < 10; i++){
      //add first 9 results as a string `loopNum * ${num} = ${result}` + \n
      result += `${i} * ${num} = ${i * num}\n`
    }
    //add final result and return
    return result += `${10} * ${num} = ${10 * num}`
  }