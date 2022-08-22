/*Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.


minimum age <= your age <= maximum age #Task

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max] */

//P: integer of age
//R: a string with two floored integers seperated by a dash; if given age is under 14 then use other equation
//E: date(17) => "15-20"
//   date(5) => "4-5"
//   date(40) => "27-66"

function datingRange(age){
    //set empty min and max
    let min
    let max
    //check if <= 14 - if so do age - 0.10*age and age + 0.10*age
    if(age <= 14){
      min = age - 0.10 * age
      max = age + 0.10 * age
      //if older: use age/2 + 7 = min and age - 7 /2 = max
    }else{
      min = (age / 2) + 7
      max = (age - 7) * 2
    }
    //floor the finals and dump into the retun string
    return `${Math.floor(min)}-${Math.floor(max)}`
  }