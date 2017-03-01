function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var testArray = [1, 2, 3, 4, 5]
  testArray.forEach(callback)
  return testArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
