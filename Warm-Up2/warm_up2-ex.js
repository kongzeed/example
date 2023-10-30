function arrayStats(arr) {
  if (arr === null && arr === undefined) {
    return {}
  }
  let min = arr[0]
  let max = arr[0]
  let sum = 0

  for (let index = 0; index < array.length; index++) {
    sum = arr[index] + sum
    if (arr[index] < min) min = arr[index]
    if (arr[index] > max) max = arr[index]
  }
  return { sum: sum, min: min, max: max }
}
console.log(arrayStats([2, 4, 6, 8]))
console.log(arrayStats([1, 3, 5, 9]))
