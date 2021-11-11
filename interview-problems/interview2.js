// Problem: You are given a list of daily share prices for a stock. What is the
// maximum profit you could have made by buying a stock on one day, and selling
// on another?
​
// function maxProfit(prices) {
//   // return max profit
// }
​
// time complexity: O(n)
​
// const maxProfit = (prices) => {
//   let maxProf = 0; // initialize maxProf at 0
//   let lowestPrice = prices[0]; // set lowestPrice as first day's price
​
//   for (let i = 1; i < prices.length; i++) {
//     // get current price for day
//     let price = prices[i];
//     // if current day's price is lower that current lower price, set it to lowerPrice
//     if (price < lowestPrice) {
//       lowestPrice = price;
//     }
//     // profit if we sold that day
//     let profit = price - lowestPrice;
//     // if current day's profit would be greater than previous maxProfit, set it to maxProf
//     maxProf = Math.max(profit, maxProf); // O(1)
//   }
//   return maxProf;
// };
​
// Brute force - try every combination
// time complexity: O(n^2)
​
// function maxProfit(prices) {
//   if (prices.length < 2) return 0;
//   let buy = -1;
//   let sell = -1;
//   let bestProfit = -Infinity;
​
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit > bestProfit) {
//         buy = i;
//         sell = j;
//         bestProfit = profit;
//       }
//     }
//   }
​
//   if (bestProfit < 0) return `don't buy!`;
//   return `buy at ${prices[buy]}, sell at ${prices[sell]}`;
// }
​
// brute force
// time complexity: O(n^2)
// function maxProfit(prices) {
//   let maxProfit = 0; // initialize our variable
​
//   // outer loop is entry (buying) price, inner loop is the selling price
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const profit = prices[j] - prices[i]; // compute profit = selling price - buying price
​
//       if (profit > maxProfit) {
//         maxProfit = profit; // reassign our max profit if the current profit is larger
//       }
//     }
//   }
​
//   return maxProfit;
// }
​
// O(n)
function maxProfit(prices) {
  let maxProfit = 0; // initialize our variable
  let startPrice = prices[0]; // initialize our buying price as the first item in array
​
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]; // current price
​
    // find a better price to buy in
    if (price < startPrice) {
      startPrice = price; // reassign startPrice because it's a lower price
      continue; // skips the current iteration
    }
​
    let profit = price - startPrice; // compute the profit (exit - entry price)
​
    if (profit > maxProfit) {
      maxProfit = profit; // reassign max profit because we have a larger profit
    }
  }
  // return the max profit after our loop is done
  return maxProfit;
}
​
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 //- buy at 1, sell at 6
console.log(maxProfit([7, 6, 5, 4, 3, 2])); // 0 //- don't buy!
console.log(maxProfit([2, 3, 4, 5, 6, 7, 100, 1, 10])); // 5
console.log(maxProfit([1, 2, 4, 5, 6, 7])); // 6
console.log(maxProfit([])); // 0