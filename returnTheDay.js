/* Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7" */

//P: number input, if not 1 through 7 or something else then return an error
//R: String name of week (1 -> "Sunday" through 7 -> "Saturday")
//E: whatday(1) => "Sunday"
    //whatday(5) => "Thursday"
    //whatday("2") => "Wrong, please enter a number between 1 and 7"

    function whatday(num) { 
        //switch with num cases, and a default error message
        switch(num){
            case 1 :
            return "Sunday";
            case 2 :
            return "Monday";
            case 3 :
            return "Tuesday";
            case 4 :
            return "Wednesday";
            case 5 :
            return "Thursday";
            case 6 :
            return "Friday";
            case 7 :
            return "Saturday";
            default :
            return "Wrong, please enter a number between 1 and 7"
        }
      }