/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john" */

function nameShuffler(str){
    let temp = str.split(' ')
    return temp[1] +' ' + temp[0]
  }