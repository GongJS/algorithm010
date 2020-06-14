// 删除排序数组中的重复项
var removeDuplicates = function(nums) {
    let count = 0
    let len = nums.length
    for (let i = 1; i<len; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[i-count] = nums[i]
        } else {
            count++
        }
    }
    return len-count
};

// 移动零
var moveZeroes = function(nums) {
    let zeroCounts = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCounts++
        } else {
            let temp = nums[i]
            nums[i] = 0
            nums[i - zeroCounts] = temp
        }
    }
};

var moveZeroes = function(nums) {
    let firstNonZero = 0
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] !== 0) {
            nums[firstNonZero] = nums[i]
            if (i !== firstNonZero) {
                nums[i] = 0
            }
            firstNonZero++
        }
    }
};

// 合并两个有序链表
var mergeTwoLists = function(l1, l2) {
    let thead = new ListNode(0)
    let l = thead
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            l.next = l1
            l1 = l1.next
        } else {
            l.next = l2
            l2 = l2.next
        }
        l = l.next
    }
    l.next = l1 == null? l2: l1;
    return thead.next
};

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
};

// 选择数组
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
};

var rotate = function(nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length - k));
  };