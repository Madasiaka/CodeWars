/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

//P: strings with or without # in them
//R: string url with all the letters and the # removed
//E: 'www.codewars.com#about' => 'www.codewars.com'
//   'www.neopets.com#omelete' => 'www.neopets.com'
//   'www.codewars.com?page=1' => 'www.codewars.com?page=1'

function removeUrlAnchor(url){
    // split via '#' then return the first word
    let newUrl = url.split('#')
    return newUrl[0]
  }