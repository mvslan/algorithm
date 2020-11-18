// 167,一个数组中，找到两个值，和为给定的target，返回下标
//  这就是对撞指针

//解法1，二分查找法

//解法2，对撞指针

//  125：判断回文字符串 .   A-Z:65-90,a-z:97-122,0-9:48-57
// 使用正则先修改字符串会更好！！
function isLetter(l) {
  if (
    (l.charCodeAt(0) >= 65 && l.charCodeAt(0) <= 90) ||
    (l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122) ||
    (l.charCodeAt(0) >= 48 && l.charCodeAt(0) <= 57)
  ) {
    return true;
  }
  return false;
}

var isPalindrome = function (s) {
  var l = 0,
    r = s.length - 1;
  flag = true;
  if (s == "") {
    return flag;
  }
  while (l <= r) {
    if (isLetter(s[l]) && isLetter(s[r])) {
      if (s[l].toLocaleUpperCase() !== s[r].toLocaleUpperCase()) {
        flag = false;
      }
      l++;
      r--;
      continue;
    }
    if (!isLetter(s[l])) {
      l++;
    }
    if (!isLetter(s[r])) {
      r--;
    }
  }
  return flag;
};

// 344：反转数组
var reverseString = function (s) {
  return s.reverse();
};

// 345:反转元音字母
var letters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var reverseVowels = function (s) {
  var str = s.split("");
  var l = 0,
    r = str.length - 1;
  while (l <= r) {
    if (letters.includes(str[l]) && letters.includes(str[r])) {
      var temp = str[l];
      str[l] = str[r];
      str[r] = temp;
      l++;
      r--;
    } else if (letters.includes(str[l]) && !letters.includes(str[r])) {
      r--;
    } else {
      l++;
    }
  }
  return str.join("");
};

var str = "hello";

// 11,,,水池问题：对撞指针

var maxArea = function (height) {
  var l = 0,
    r = height.length - 1,
    maxArea = 0;
  while (l < r) {
    maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};


var arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(arr))

