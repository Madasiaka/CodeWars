//P: number integer (n)
//R: a string of I with /n in between each I, number of Is equal to n, number of /n equal to n-1
//E: stairs(1) => "I"
  // stairs(3) => "I\n I\n I"
  // stairs(6) => "I\n I\n I\n I\n I\n I"

  function drawStairs(n) {
    // set empty array and one space, push I\n for loop of n-1; push I; push space; add one more space to space; join with " "
    let stairs = []
    let space = ' '
    for(let i = 0; i < n-1; i++){
      stairs.push("I\n" + space)
      space += " "
    }stairs.push("I")
    return stairs.join('')
  }