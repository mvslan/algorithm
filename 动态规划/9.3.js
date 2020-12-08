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
// console.log(integerBreak(31))


// 279,这个写法超时了
var numSquares = function (n) {
  var memo = []
  memo[1] = 1
  for (var i = 2; i <= n; i++) {
    var min = 0
    if (Math.sqrt(i) == Math.floor(Math.sqrt(i))) {
      min = 1
    } else {
      for (var j = 1; j <= Math.floor(i / 2); j++) {
        if (j == 1) {
          min = (memo[j] + memo[i - j])
        } else {
          min = Math.min(memo[j] + memo[i - j], min)
        }
      }
    }
    memo[i] = min
  }
  return memo[n]
};

// 91
var numDecodings = function (s) {
  var memo = []
  if (s.length == 1) {
    if (s == '0') memo[0] = 0
    else memo[0] = 1
  } else {
    for (var i = 1; i < s.length; i++) {

    }
  }
};

// 62
var uniquePaths = function (m, n) {
  var memo = []
  for (var i = 0; i < n; i++) {
    memo[i] = []
    for (var j = 0; j < m; j++) {
      if (i == 0 || j == 0) memo[i][j] = 1
      else memo[i][j] = memo[i - 1][j] + memo[i][j - 1]
    }
  }
  return memo[n - 1][m - 1]
};


// 63
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length - 1, n = obstacleGrid[0].length - 1
  var memo = []
  for (var i = 0; i <= m; i++) {
    memo[i] = []
    for (var j = 0; j <= n; j++) {
      if (i == 0 && j == 0) {
        if (obstacleGrid[i][j] == 1) memo[i][j] = 0
        else memo[i][j] = 1
      }
      else if (i == 0) {
        if (obstacleGrid[i][j] == 1) memo[i][j] = 0
        else memo[i][j] = memo[i][j - 1]
      } else if (j == 0) {
        if (obstacleGrid[i][j] == 1) memo[i][j] = 0
        else memo[i][j] = memo[i - 1][j]
      } else {
        if (obstacleGrid[i][j] == 1) memo[i][j] = 0
        else
          memo[i][j] = memo[i][j - 1] + memo[i - 1][j]
      }
    }
  }
  return memo[m][n]
};
var obstacleGrid = [[0, 1], [0, 0]]
console.log(uniquePathsWithObstacles(obstacleGrid))