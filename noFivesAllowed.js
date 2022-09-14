function dontGiveMeFive(start, end){ 
    let array = []
    for(let i = start; i <= end; i ++){
      if(!i.toString().includes("5")) array.push(i)
    }
    return array.length;
  }