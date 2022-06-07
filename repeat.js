var repeatIt = function(str, n) {
    //test if is a string using typeof, str.repeat(n)
    if( typeof str == "string"){
      return str.repeat(n)
    }else{
      return "Not a string"
    }
  }