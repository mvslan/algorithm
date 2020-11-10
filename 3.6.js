// 167,一个数组中，找到两个值，和为给定的target，返回下标
//  这就是对撞指针

//解法1，二分查找法



//解法2，对撞指针





//  125



// 344



// 345




// 11
var maxArea = function (height) {
  var sum = height.length
  if (height.length <= 1) {
    return 0
  }
  if (height.length == 2) {
    return Math.min(height[1], height[0])
  }
  return Math.max(Math.min(height[sum - 1], height[0]) * (sum - 1),
    maxArea(height.slice(0, sum - 1)),
    maxArea(height.slice(1, sum))
  )
};

var arr = [2, 3, 10, 5, 7, 8, 9, 1, 1, 1]
console.log(maxArea(arr))