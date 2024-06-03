function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

// 示例用法
const unsortedArray = [5, 3, 8, 4, 9, 1, 6, 2, 7]
const sortedArray = quickSort(unsortedArray)
console.log(sortedArray) // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
