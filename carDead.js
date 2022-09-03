function bump(x){
    let y = x.split('').filter(el => el =='n')
    return y.length > 15 ? "Car Dead" : "Woohoo!"
  }