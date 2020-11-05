// 75,,,计数排序：适用于元素个数非常有限的情况
// var sortColors = function (nums) {
//   var arr = [0, 0, 0]
//   for (var i = 0; i < nums.length; i++) {
//     arr[nums[i]]++
//   }
//   var index = 0
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i]; j++) {
//       nums[index++] = i
//     }
//   }
// };


//三路快排解法:不能忘记在第一段的i++！！
var sortColors = function (nums) {
  var l = -1, r = nums.length
  for (var i = 0; i < r;) {
    if (nums[i] == 1) {
      i++
    } else if (nums[i] == 0) {
      var temp1 = nums[i]
      nums[i] = nums[++l]
      nums[l] = temp1
      i++
    } else {
      var temp2 = nums[i]
      nums[i] = nums[--r]
      nums[r] = temp2
    }
  }
}

var arr = [2, 0, 2, 1, 1, 0]
// sortColors(arr)



// 88


// 215
