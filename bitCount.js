var countBits = function(n) {
    return n
        .toString(2)
        .split('')
        .reduce((a,b) => a + Number(b), 0);
  };