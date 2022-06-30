//P: array of strings
//R: array of strings with the rotten name removed with fruit in lowercase
//E: 

function removeRotten(bagOfFruits){
    // ...check if includes rotten; remove the rotten and lowercase then return
    if(!bagOfFruits){
      return []
    }
    for(let i = 0; i < bagOfFruits.length; i++){
      if(bagOfFruits[i].includes("rotten")){
        bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase()
      }
    }return bagOfFruits
  }

  