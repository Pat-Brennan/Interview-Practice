// 0, 1, 1, 2, 3, 5, 8, ...
// O(2^n)
// O(n) with memoization
​
// memoization: caching previously computed values
// dynamic programming:
function fibonacci(n, values = []) {
  // check to see if the fib at n was previously computed
  if (values[n] != null) {
    return values[n]; // return the previously computed value stored in our array
  }
​
  // base case
  if (n < 1) {
    return 0;
  }
  // if n is 2 or 1 then result = 1
  if (n <= 2) {
    result = 1;
  } else {
    result = fibonacci(n - 1, values) + fibonacci(n - 2, values);
  }
​
  // store previously computed value into our array
  values[n] = result;
​
  // returns the final fibonacci n that you are looking for
  return result;
}
​
console.log(fibonacci(50));
console.log(fibonacci(100));
console.log(fibonacci(101));