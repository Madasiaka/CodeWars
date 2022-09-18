//P: make sure all elements in an array are equal to or lower than a given limit
//R: true/false boolean
//E: ([80, 117, 115, 104, 45, 85, 112, 115], 120) => true
//   ([78, 117, 110, 99, 104, 117, 107, 115], 100) => false
//   ([66, 101], 200) => true

function smallEnough(a, limit){
    //every
      return a.every(el => el <= limit)
    }