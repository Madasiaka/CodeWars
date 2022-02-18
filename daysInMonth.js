/*Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12). */

//P: integer number between 1 and 12
//R: number 28, 30, or 31
//E: days(1) => 31
    //days(2) => 28
    //days(4) => 30

    function howManydays(month){
        var days;
        switch (month){
          case 4 :
            days = 30;
            break;
          case 6 :
            days = 30;
            break;
          case 9 :
            days = 30;
            break;
          case 11 :
            days = 30;
            break;
          case 2 :
            days = 28;
            break;
          default :
            days = 31
            break;
        }
        return days;
      }