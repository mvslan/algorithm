// 198
// 1，记忆化搜索；2，自顶向下
// 记忆化搜索
// var memo = []
// var rob = function (nums) {
//   return robNew(nums, 0)
// };
// var robNew = function (nums, index) {
//   if (index >= nums.length) return 0
//   var res = 0
//   if (memo[index] != undefined) return memo[index]
//   for (var i = index; i < nums.length; i++) {
//     res = Math.max(res, nums[i] + robNew(nums, i + 2))
//   }
//   memo[index] = res
//   console.log(res)
//   return res
// };
var arr = [2, 7, 9, 3, 1]

// 213
var rob = function (nums) {
  return newRob(nums, 0, nums.length)
}
var memo = []
var newRob = function (nums, i, length) {
  if (i >= nums.length) return 0
  if (memo[i]) return memo[i]
  var res = 0
  for (var k = i; k < length; k++) {
    if (k == 0) {
      res = Math.max(res, nums[k] + newRob(nums, k + 2, length - 1))
    } else
      res = Math.max(res, nums[k] + newRob(nums, k + 2, length))
  }
  memo[i] = res
  return res
}
var arr = nums = [1, 2, 3, 1]

// 337

// 309
var maxProfit = function (prices) {
  if (prices.length == 0) return 0
  var buy = [], sell = []
  buy[0] = prices[0] * (-1)
  buy[1] = Math.max(buy[0], prices[1] * (-1))
  sell[0] = 0
  sell[1] = Math.max(sell[0], buy[1] + prices[1])

  for (var i = 2; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i])
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i])
  }

  return sell[prices.length - 1]
};

var arr = [1, 2, 3, 0, 2]
console.log(maxProfit(arr))