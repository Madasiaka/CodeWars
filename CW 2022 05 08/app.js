function validate(n){
    let temp = Array(Number(n))
    if(temp.length % 2 == 0){
      for(let i = 0; i < temp.length/2; i += 2){
        temp[i] = Number(temp[i])*2
        if(temp[i] > 9){
          temp[i] -= 9
        }
      } 
    }else{
      for(let i = 1; i < temp.length/2; i += 2){
        temp[i] *= 2
        if(temp[i] > 9){
          temp[i] -= 9
        }
    }
  }return (temp.reduce((acc, c) => acc + c, 0)) % 10 == 0 
    }