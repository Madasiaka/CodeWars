/*function divisors(integer) {
  let answer = []
  for(let i = 2; i <= integer/2; i ++){
    if(integer % i == 0){
      answer.push(i)
    }
  } return answer.length > 1 ? answer : `${integer} is prime`
}; */

function divisors(integer) {
    let answer = []
    for(let i = 2; i <= integer/2; i ++){
      if(integer % i == 0){
        answer.push(i)
      }
    } return answer.length > 1 ? answer : `${integer} is prime`
  };