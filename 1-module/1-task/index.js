/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    if (n === 0) {
      return n;
    } else {
      sum = sum * i;
    }
  }
  return sum;
}
