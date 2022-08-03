/*Return the type of the sum of the two arguments */

function typeOfSum(a, b) {
    if (typeof a == 'string' || typeof b == 'string') {
      return 'string'
    }
    return 'number'
  }