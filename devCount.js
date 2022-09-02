function countDevelopers(list) {
    let num = 0
    for(let i = 0; i<list.length; i++){
      if(list[i].continent == "Europe" && list[i].language == "JavaScript"){
        num ++
      }
    }return num
  }