/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    // to lowercase - split(''), object to values, get rid of emptys, join back
    let alphabet = {
    a : 1,  f : 6,   k : 11,  p : 16,  u : 21,
    b : 2,  g : 7,   l : 12,  q : 17,  v : 22,
    c : 3,  h : 8,   m : 13,  r : 18,  w : 23,
    d : 4,  i : 9,   n : 14,  s : 19,  x : 24,
    e : 5,  j : 10,  o : 15,  t : 20,  y : 25,
    z : 26
    }
    let letters = text
      .toLowerCase()
      .split('')
      .map(el => el = alphabet[el])
      .filter(el => el)
    return letters.join(' ')
  }