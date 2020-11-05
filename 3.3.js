// 283题：将数组中所有0移动到最后，其他位置相对不变
// test：26，27，80题

function moveZeroes(arr) {
  k = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      if (i !== k) {
        arr[k] = arr[i]
        arr[i] = 0
      }
      k++
    }
  }
}


// 26
var removeDuplicates = function (nums) {
  var count = 0
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count++
      nums[count] = nums[i]
    }
  }
  return count + 1
};

//27
var removeElement = function (nums, val) {
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      var temp = nums[i]
      nums[i] = nums[sum]
      nums[sum] = temp
      sum++
    }
  }
  return sum
};

// 80
var removeDuplicates = function (nums) {
  var sum = 1, flag = 1, last = nums[0]
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] === last) {
      flag++
      if (flag <= 2) {
        nums[sum] = nums[i]
        sum++
      }
    } else {
      last = nums[i]
      nums[sum] = nums[i]
      flag = 1
      sum++
    }
    console.log(nums)
  }
  return sum
};
var arr = [1, 1, 1, 1, 2, 3, 3]
removeDuplicates(arr)