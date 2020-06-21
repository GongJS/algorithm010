// 有效的字母异位词

var isAnagram = function(s, t) {
    let _s = s.split('').sort().join()
    let _t = t.split('').sort().join()
    return _s === _t
};

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    let lens = s.length
    let lent = s.length
    let cache = {}
    for(let i = 0; i<lens; i++) {
        if (!cache[s[i]]) {cache[s[i]] = 0}
        if (!cache[t[i]]) {cache[t[i]] = 0}
        cache[s[i]]++
        cache[t[i]]--
    }
    return !Object.values(cache).some(v => v !==0)
};

// 两数之和
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length -1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

var twoSum = function(nums, target) {
    let cache = {}
    for(i = 0 ; i < nums.length; i++) {
        if (cache[target-nums[i]] >= 0) {
            return [cache[target-nums[i]], i]
        } else {
            cache[nums[i]] = i
        }
    }
};

// N叉树的前序遍历
var preorder = function(root) {
    let res = []
    let fun = (node) => {
        if (node === null) {return}
        res.push(node.val)
        for (let child of node.children) {
            fun(child)
        }
    }
    root && fun(root)
    return res
};

var postorder = function(root) {
    let res = []
    let stack = []
    if (root === null) {return res}
    stack.push(root)
    while(stack.length) {
        let temp = stack.pop()
        res.push(temp.val)
        for(let child of temp.children) {
            stack.push(child)
        }
    }
    return res
};

// 字母异位词分组
var groupAnagrams = function(strs) {
    let hash = new Map()
    let len = strs.length
    for (let i = 0; i < len; i++) {
        let str = strs[i].split('').sort().join()
        if (hash.has(str)) {
            let temp = hash.get(str)
            temp.push(strs[i])
            hash.set(str, temp)
        } else {
            hash.set(str, [strs[i]])
        }
    }
    return [...hash.values()]
};