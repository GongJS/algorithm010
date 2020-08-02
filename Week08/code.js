// 选择排序
sort1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length;j++) {
      if (arr[minIndex] > arr[j]) {
         minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 插入排序
sort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let pre = i - 1
    let cur = arr[i]
    while(pre >= 0 && arr[pre] > cur) {
      arr[pre + 1] = arr[pre]
      pre--
    }
    arr[pre + 1] = cur
  }
  console.log(arr)
  return arr
} 

// 选择排序
sort3 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log(arr)
}

// 归并排序
merge = (arr1, arr2) => {
  let n = arr1.length
  let m = arr2.length
  let i = 0
  let j = 0
  let res = []
  while(i < n && j < m) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j++])
    } else {
      res.push(arr1[i++])
    }
  }
  while(i < n) {
    res.push(arr1[i])
  }
  while(j < m) {
    res.push(arr2[j++])
  }
  return res
}
sort4 = (arr) => {
  if (arr.length === 1) {return arr}
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(sort1(left), sort1(right))
}

// 快排
swap = (arr,i,j) => {
  return [arr[i], arr[j]] = [arr[j], arr[i]]
}
handlePoint = (arr,start, end) => {
  if (end - start === 0) return -1
  if (end - start === 1) return 0
  let point = arr[start]
  let k = 1
  while(end - k > 1) {
    if (arr[k] > point) {
      swap(arr,k,end-1)
      end--
    } else {
      k++
    }
  }
  swap(arr,0,k - 1)
  return k -1
}
sort5 = (arr) => {
  _sort5(arr, 0, arr.length)
}
_sort5 = (arr,start,end) => {
  if ((end - start) <= 1) {
    return arr
  }
  let point = handlePoint(arr, start, end)
  _sort5(arr, start,point)
  _sort5(arr, point+1,end)
  return arr
}
