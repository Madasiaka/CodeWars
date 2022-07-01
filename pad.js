function padIt(str,n){
    let side = 0
    let i = 1
    while(i <= n){
      if(side % 2 != 0){
        str = str + "*"
      }else{
        str = "*" + str
      }
      side ++
      i ++
    }
    return str
  }