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



// 88，合并两个有序数组

var merge = function (nums1, m, nums2, n) {
  var i = m - 1, j = n - 1
  while (i >= 0 && j >= 0) {
    nums1[i + j + 1] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
  }
  while (j >= 0) nums1[j] = nums2[j--]
};

var arr1 = [1, 2, 3]
var arr2 = [2, 3, 4]
merge(arr1, 3, arr2, 3)
console.log(arr1)



// 215
var findKthLargest = function (nums, k) {
  var a = nums.sort(function (a, b) {
    return a - b
  })
  return a[a.length - k]
};