module.exports = function reverse (n) {
    let result = '';
    for (i = String(Math.abs(n)).length - 1; i >= 0; i--) {
        result += String(Math.abs(n))[i]; 
      }
      return result;
}
