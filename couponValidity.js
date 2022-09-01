/*Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR". */

//String of entered code, correct code, current date and expiration date
//true or false boolean if the coupon codes match and the current date is less or equal to the expiration date
//checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
//checkCoupon("123", "123", "July 9, 2016", "July 9, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    //check entered code === correct code, make dates into date objects then see if less or equal
       let cur = new Date(currentDate)
       let exp = new Date(expirationDate)
    return enteredCode === correctCode && cur <= exp 
  }