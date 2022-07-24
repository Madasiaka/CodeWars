//P: two numbers litres and price as integers
//R: total cost rounded to 2 decimals (float)
//E: fuel(5, 1.23) => 5.65
  // fuel(10, 1) => 7.50
  // fuel(8, 2.5) => 18.40

  function fuelPrice(litres, pricePerLitre) {
    // divide number of litres by 2 if even, if not subtract one then divide by two; multiply by 5; subtract the price per litre; round to two places - make sure it's a number; max out at .25 
    let discount 
    if(litres%2 == 0){
      discount = ((litres/2) * 5)/100
    }else{
      discount = ((litres - 1)/2 * 5)/100
    }
    if(discount > .25){
      discount = .25
    }
    return Number(((pricePerLitre - discount) * litres).toFixed(2))
  }