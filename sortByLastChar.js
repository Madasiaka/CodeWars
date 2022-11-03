/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid. */

// string of words "words word"
// array of the words, sorted alphabetically by final char in each word (a => z) - if multiple of same letter, keep in string order

function last(x){
    //split ' ' sort method using char codes
      return x.split(' ').sort((a, b) => {
        return a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1)                        
       })
    }
    
    console.log(last('a b c'), ['a', 'b', 'c'])
    console.log(last('an animal smells nice'), ['nice', 'animal', 'an', 'smells'])
    console.log(last('we are friends'), ['we', 'are', 'friends'])