function increment(num) {
  if (num === undefined) {
    throw new Error('Please input arguments')
  }
  return num++
}
// console.log(increment())
console.log(increment(2))
console.log(increment(2, 3))

function showArgs(num1, num2) {
  console.log(num1, num2)
}
showArgs(1)
showArgs(1, 2)

// allow func
const allowShowArgs = (num1, num2) => {
  console.log(num1, num2)
}
allowShowArgs(1)
