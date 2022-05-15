// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.


//P: Given two numbers normPrice and holiday cost, all integers. discount is done as an integer but needs to be turned into a decimal
//R: return a rounded down integer (.floor())
//E: dutyFree(12, 50, 1000) =>  166
    //dutyFree(17, 10, 500) => 294
    //dutyFree(24, 35, 3000) => 357


    function dutyFree(normPrice, discount, hol){
        //math discount divided by 100
        //normPrice * discount, then hol divided by that price
        //return a rounded down integer
        return Math.floor(hol/(normPrice * (discount/100)))
      }