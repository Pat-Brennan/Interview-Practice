// Problem: convert a number to its binary equivalent
​
/**
 * Info: how does binary work? Think about decimal first. Each column
 * represents a power of ten (ones, tens, hundreds). For example, take the
 * number 274.
 *
 * 100s 10s 1s
 *    2   7  4 === (2 * 100) + (7 * 10) + (4 * 1) === 274
 *
 *
 * Binary is the same, but each column represents a power of two.
 *
 * 2^0 = 1
 * 2^1 = 2
 * 2^2 = 4
 * 2^3 = 8
 *
 * 8421
 * ----
 *    0  ===                                (0 * 1) === 0
 *    1  ===                                (1 * 1) === 1
 *   10  ===                      (1 * 2) + (0 * 1) === 2
 *   11  ===                      (1 * 2) + (1 * 1) === 3
 *  100  ===            (1 * 4) + (0 * 2) + (0 * 1) === 4
 *  101  ===            (1 * 4) + (0 * 2) + (1 * 1) === 5
 *  110  ===            (1 * 4) + (1 * 2) + (0 * 1) === 6
 *  111  ===            (1 * 4) + (1 * 2) + (1 * 2) === 7
 * 1000  ===  (1 * 8) + (0 * 4) + (0 * 2) + (0 * 1) === 8
 */
​
function toBinary(x) {
  // base case: return 0 or 1
  if (x < 2) {
    return x.toString();
  }
​
  // recursive case
  const d = Math.floor(x / 2); // divide our number by 2 and round down
  const r = x % 2; // remainder LSB: Least Significant Bit (number to the farthest right of the binary number)
  return toBinary(d) + r;
}
​
console.log(toBinary(10)); // 1010
console.log(toBinary(247)); // 11110111
​
// even or odd
// if a number is evenly divisible by 2 remainder is 0
// fizz buzz or fizzbuzz
// if divisible by 3 then print fizz
// if divisible by 5 then print buzz
// and if divisible by 3 AND 5 then print fizzbuzz