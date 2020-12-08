var maximumWealth = function (accounts) {
  var m = accounts.length, max = 0
  for (var i = 0; i < m; i++) {
    var sum = 0
    for (var j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j]
    }
    max = Math.max(sum, max)
  }
  return max
};


//1673
var getMax = function (arr1, arr2) {
  var n = arr1.length
  for (var i = 0; i < n; i++) {
    if (arr1[i] < arr2[i]) return arr1
    else if (arr1[i] > arr2[i]) return arr2
    else continue
  }
  return arr1
}

var mostCompetitive = function (nums, k) {
  var arr = nums.slice(0, k)
  for (var i = k; i < nums.length; i++) {
    var arr1 = arr.slice(1, k)
    arr1.push(nums[k])
    var arr2 = arr.slice(0, k)
    arr2[k - 1] = nums[k]
    arr = getMax(getMax(arr1, arr2), arr)
  }
  return arr
};

nums = [2, 4, 3, 3, 5, 4, 9, 6]
console.log(mostCompetitive(nums, 4))