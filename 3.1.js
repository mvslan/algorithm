// 二分查找法
/**
 * 总结
 * 1，明确变量的含义：l，r是边界
 * 2，循环不变量：l,r循环，但是含义不变
 * 3，小数据量调试
 * 4，大数据量测试
 */

function binarySearch(arr, length, n) {
  // 
  var l = 0, r = length - 1
  while (l <= r) {
    // l和r如果足够大的话，可能会有溢出
    // var mid = Math.floor((l + r) / 2)
    var mid = Math.floor(l + (r - l) / 2)
    if (arr[mid] === n) {
      return mid
    }
    if (arr[mid] < n) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}

//写一个测试程序
function getArray(num) {
  var arr = []
  for (var i = 0; i < num - 1; i++) {
    arr.push(i)
  }
  return arr
}

console.time('binary')

var num = 1000000
var arr = getArray(num)

for (var i = 0; i <= arr.length - 1; i++) {
  // console.log(binarySearch(arr, num, i))
  if (!(i === binarySearch(arr, num, i))) {
    console.log('报错')
    return
  }
}


console.timeEnd('binary')

