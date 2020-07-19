// 打家劫舍
var rob = function(nums) {
  if (nums.length === 0) {return 0}
  if (nums.length === 1) {return nums[0]}
  let n = nums.length
  let res = Array.from(new Array(n),() => []);
  res[0][0] = 0
  res[0][1] = nums[0]
  for (let i = 1; i< n; i++) {
      res[i][0] = Math.max(res[i - 1][1], res[i - 1][0])
      res[i][1] = res[i - 1][0] + nums[i]
  }
  return Math.max(res[n - 1][0], res[ n -1 ][1])
};

var rob = function(nums) {
let pre = 0
let cur = 0
let temp = 0
for (let i = 0; i < nums.length; i++) {
    temp = cur
    cur = Math.max(cur, pre + nums[i])
    pre = temp
}
return cur
};

// 打家劫舍二
var rob = function(nums) {
  if (nums.length === 1) {return nums[0]}
  if (nums.length === 0) {return 0}
  let pre = 0
  let cur = 0
  let temp = 0
  let res = []
  // 第一个不偷
  for (let i = 1; i < nums.length; i++) {
      temp = cur
      cur = Math.max(cur, pre + nums[i])
      pre = temp
  }
  res.push(cur)
  pre = 0
  cur = nums[0]
  temp = 0
  // 第一个偷
  for (let i = 1; i < nums.length - 1; i++) {
      temp = cur
      cur = Math.max(cur, pre + nums[i])
      pre = temp
  }
  res.push(cur)
  return Math.max(...res)
};