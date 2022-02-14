//P: string
//R: true/false if there are repeating characters (same case)
//E: "Dermatoglyphics" --> true
//   "aba" --> false
//   "moOse" --> false (ignore letter case)


function isIsogram(str){
    str = str.toLowerCase()
    // nested loops : first for going through the string; second for comparing to all string to the right; 
    for(let i = 0; i < str.length; i++){
      for(let j = i+1; j < str.length; j++){
        if(str[j] == str[i]) return false
      }
    }return true
  }