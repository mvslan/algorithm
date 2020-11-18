// 动态规划：将问题拆解成若干个子问题，同时保存子问题的答案，使得每个子问题都只求解一次，并最终最终获得原问题的答案
// 1，记忆化搜索：保存子问题的答案（自顶向下），本质就是递归 2，动态规划：for循环解决问题（自底向上）
// 斐波拉契数列

var memo = []

function fib(num) {
  if (num == 0) return 0
  if (num == 1) return 1
  if (memo[num] == undefined) {
    memo[num] = fib(num - 1) + fib(num - 2)
  }
  return memo[num]
}


// 70
var climbStairs = function (n) {
  var memo2 = [1, 1]
  for (i = 2; i <= n; i++) {
    memo2[i] = memo2[i - 1] + memo2[i - 2]
  }
  return memo2[n]
};


// 64
//给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小
// 自底向上的解法
var minPathSum = function (grid) {
  var m = grid.length - 1, n = grid[0].length - 1
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (i == 0 && j == 0) continue
      else if (i == 0) grid[i][j] = grid[i][j] + grid[i][j - 1]
      else if (j == 0) grid[i][j] = grid[i][j] + grid[i - 1][j]
      else grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j]
    }
  }
  return grid[m][n]
};
var grid = [[1, 2, 3], [4, 5, 6]]
console.log(minPathSum(grid))