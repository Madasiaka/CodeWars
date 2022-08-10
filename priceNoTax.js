/*Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1 */

//P: price as an integer
//R: price minus the 15% VAT - as a float rounded to 2 places, or -1 if price input is null
//E: price(1.15) => 1.00
  // price(22) => 19.13
  // price(null) => -1

  function excludingVatPrice(price){
    // formula for notaxprice = price / 1.15, .toFixed(2)
    return price == null ? -1 : +(price/1.15).toFixed(2) 
  }