// 343  两种方式解决
// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

// （1）递归解法，很耗时，可优化
// var integerBreak = function (n) {
//   if (n == 1) return 1
//   result = 0
//   for (var i = 1; i < n; i++) {
//     result = Math.max(result, i * (n - i), i * integerBreak(n - i))
//   }
//   return result
// };

var integerBreak = function (n) {
  var memo = []
  memo[1] = 1
  for (var i = 2; i <= n; i++) {
    memo[i] = Math.max(memo[i - 1], i)
  }
  return memo[n]

}
console.log(integerBreak(31))


// 279


// 91


// 62




// 63