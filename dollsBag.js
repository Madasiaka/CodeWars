/*Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished. */

//P: array of dolls (strings in array) - check for hello kitty or barbie
//R: array with max 3 items (bag - only holds hello kitty/barbie)
//E: doll('pluto', 'sailor moon', 'american girl doll') => []
  //doll('hello kitty', 'hello kitty', 'hello kitty', 'barbie doll') => ['hello kitty', 'hello kitty', 'hello kitty']
  //doll('barbie', 'pluto', 'hello kitty', 'teddy bear', 'barbie doll') => ['barbie doll', 'hello kitty', 'barbie doll']

  function grabDoll(dolls){
    var bag=[];
    //for loop (i < dolls.length) dolls[i] =='Hello Kitty' || 'Barbie' then push to bag else continue; break condition for bag.length = 3
    for(let i = 0; i < dolls.length; i++){
      if(dolls[i] != 'Hello Kitty' && dolls[i] != 'Barbie doll') continue;
      bag.push(dolls[i])
      if(bag.length == 3){
        break;
      }
    }
    return bag;
  }