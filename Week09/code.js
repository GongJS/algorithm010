// 反转字符串
var reverseString = function(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      let temp = s[i]
      s[i] = s[j]
      s[j] = temp
  }
  return s
};

// 反转字符串2

var reverseStr = function(s, k) {
  if (s.length === 0) {return s}
  let res = []
  let len = s.length
  let flag = true
  for (let i = 0; i < len; i+=k) {
      if (flag) {
          res.push(s.substr(i,k).split('').reverse().join(''))
          flag = false
      } else {
          res.push(s.substr(i,k))
          flag = true
      }
  }
  return res.join('')
};