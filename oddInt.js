//an array with numbers - one of which will show up and odd number of times, the rest even
//return the number that is odd (amounts shown)

function findOdd(A) {
    //sort(), counter add one if [i] == [i+1], return i if odd, else set count back to 1 and go to next num
    A = A.sort((a,b) => a - b)
    let count = 1
    for(let i = 0; i < A.length; i++){
      if(A[i] == A[i + 1]){
        count ++
      }else{
        if(count % 2 == 1){
          return A[i]
        }
        count = 1
      }
    }
  }
  
  console.log(findOdd([1,1,2]), 2)
  console.log(findOdd([7]), 7)
  console.log(findOdd([0, 1, 0, 1, 0]), 0)