//P: two strings (or numbers)
//R: if not a letter string : return -1; if both strings then return 1 if same case; 0 if both strings but not same case
//E: same(2, "a") => -1
  // same("G", "f") => 0
  // same("G", "F") => 1

  function sameCase(a, b){
    //check if letters by upper and lowering them; check if both uppercase == .toUpperCase using ands; return
      switch (true){
         case(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()):
          return -1;
          break;
         case (a.toUpperCase() == a && b.toUpperCase() == b):
          return 1;
          break;
         case(a.toUpperCase() != a && b.toUpperCase() != b):
          return 1;
          break;
         default:
          return 0;
          break;
      }
    }
    