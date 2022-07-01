//P: three integers - water, load, clothes
//R: float with 2 decimal places
//E: howMuchWater(10,10,21) => 'Too much clothes'
  // howMuchWater(10,10,2) => 'Not enough clothes'
  // howMuchWater(10,11,20) => 23.58
  // howMuchWater(50,15,29) => 189.87

  function howMuchWater(water, load, clothes){
    // check if clothes are more than 2 times the load; check if clothes are smaller than the load size; do the maths of water * 1.1 ^ clothes - load then round
     if(clothes > (2 * load)){
      return 'Too much clothes'
    }else if(clothes < load){
      return 'Not enough clothes'
    }else{
      return Number((water * 1.1 ** (clothes - load)).toFixed(2))
    }
  }