/* Given a string, return the string with all words 5 letters or longer reversed*/

function spinWords(string){
    var temp = string.split(' ')
    for(let i = 0; i < temp.length; i++){
      var wordTemp =[]
      if(temp[i].length >= 5){
        wordTemp = temp[i].split('')
        let wordReverse = []
        for(let j = wordTemp.length; j >= 0 ; j--){
          wordReverse.push(wordTemp[j])
        } wordTemp = wordReverse.join('')
        temp[i] = wordTemp
      } 
    }
    return temp.join(' ')
  }