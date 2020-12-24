// 背包问题
// 1,记忆化搜索；2，动态规划--自底向上

// function bestValue(weight, value, index, C) {
//   if (C <= 0 || index < 0) return 0
//   var res = bestValue(weight, value, index - 1, C)
//   if (memo[index][C]) {
//     return memo[index][C]
//   }
//   if (C >= weight[index]) {
//     res = Math.max(res, value[index] + bestValue(weight, value, index - 1, C - weight[index]))
//   }
//   memo[index][C] = res
//   return res
// }
var weight = [1, 2, 3]
var value = [6, 10, 12]
var C = 5
var index = 3
var memo = []
for (var i = 0; i < C; i++) {
  memo[i] = []
}

// 自底向上
function bestValue(weight, value, index, C) {
  var memo = [[]]
  for (var j = 0; j <= C; j++) {
    memo[0][j] = (j >= weight[0] ? value[0] : 0)
  }
  for (var i = 1; i < index; i++) {
    memo[i] = []
    for (var j = 0; j <= C; j++) {
      if (weight[i] <= j) {
        memo[i][j] = Math.max(memo[i - 1][j], value[i] + memo[i - 1][j - weight[i]])
      } else {
        memo[i][j] = memo[i - 1][j]
      }
      console.log(memo)
    }
  }
  return memo[index - 1][C]

}


console.log(bestValue(weight, value, index, C))