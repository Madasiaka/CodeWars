//P: given two arrays, return a point system based on how many match
//R: number
//E: checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
//   checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
//   checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
//   checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
    // run loop comparing array1[i] == array2[i];
     let total = 0
     for(let i = 0; i < array1.length; i++){
       if(array1[i] == array2[i]){
         total= total + 4
       }else if(!array2[i]){
         total = total
       }else{
         total --
       }
     }return total > 0? total : 0
     
   }