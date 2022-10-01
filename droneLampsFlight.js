function flyBy(lamps, drone){
    let flight = drone.length
    let genie = lamps.split('')
    for(let i = 0; i < flight; i++){
      if(i == genie.length) break;
      genie[i] = 'o'
    }
    return genie.join('')
  }