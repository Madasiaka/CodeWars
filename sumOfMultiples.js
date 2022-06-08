/*Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples */

//P two integers (n and m) - positive and non zero
//R integer sum of all ns that go into m evenly
//E sum(0,0) => invalid
    //sum(1,4) => 10
    //sum(2,9) => 20

    function sumMul(n,m){
        //empty number, modulus m equals zero loop add to the empty, return. Have an invalid return too
          let sum = 0
          for(let i = n; i < m; i= i+n){
            sum = sum + i
          } return sum == 0 ? "INVALID" : sum
         }