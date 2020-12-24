//300 最长升序子序列
// 来一个自顶向下！！
var lengthOfLIS = function (nums) {
  var memo = new Array(nums.length).fill(1)
  for (var i = 1; i < nums.length; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        memo[i] = Math.max(memo[i], memo[j] + 1)
      }
    }
  }
  var res = 1
  for (var i = 0; i < nums.length; i++) {
    res = Math.max(res, memo[i])
  }
  return res

};
// var arr = [10, 9, 2, 5, 3, 7, 101, 18]


// 376 最长摆动序列

var wiggleMaxLength = function (nums) {
  var res1 = wiggleMaxLength2(nums, 1)
  var res2 = wiggleMaxLength2(nums, -1)
  return Math.max(res1, res2)
}

var wiggleMaxLength2 = function (nums, flag) {
  if (nums.length < 1) return 0
  var memo = []
  for (var i = 0; i < nums.length; i++) {
    memo[i] = []
    memo[i][0] = 1
    memo[i][1] = flag
  }
  for (var i = 1; i < nums.length; i++) {
    var j = i - 1
    do {
      if (memo[j][1] > 0) {
        if (nums[i] > nums[j]) {
          memo[i][0] = memo[j][0] + 1
          memo[i][1] = -1
        } else {
          j--
        }
      } else {
        if (nums[i] < nums[j]) {
          memo[i][0] = memo[j][0] + 1
          memo[i][1] = 1
        } else {
          j--
        }
      }
    } while (memo[i][0] == 1 && j >= 0)
  }
  var res = 1
  for (var i = 0; i < nums.length; i++) {
    res = Math.max(res, memo[i][0])
  }
  return res
};
var arr = [3, 3, 3, 2, 5]
console.log(wiggleMaxLength(arr))












