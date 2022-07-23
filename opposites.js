/*Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false */

function isOpposite(s1,s2){
    //list alphabet in lowercase, assign variables and check if lowercase and then add on based on yes/no with oposite characters, equal check; also default to false if !string
    if(!s1 || !s2) return false
    
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let case1 = ''
    let case2 = ''
    
    s1= s1.split('')
    s2 = s2.split('')  
    
    for(let i = 0; i<s1.length; i++){
      if(upper.includes(s1[i])){
        case1 += "x"
      }else{
        case1 += "y"
      }
    }
    for(let i = 0; i<s2.length; i++){
      if(upper.includes(s2[i])){
        case2 += "y"
      }else{
        case2 += 'x'
      }
    }
    return case1 == case2
  }