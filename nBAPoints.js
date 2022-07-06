/*An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams! */

//P: floats or integers, points per game and minutes played per game
//R: float or number to one place
//E: (12, 20) => 28.8
  // (9, 9) => 48.0
  //(5, 10) => 24.0
//P: divide ppg by minutes per game for points per minute, multiply by 48, round toFixed(1) and return (or zero)

function pointsPer48(ppg, mpg) {
    let points = Number(((ppg/mpg) * 48).toFixed(1))
    return  points ? points : 0
  }