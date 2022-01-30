// typeof
console.log(typeof 1) // number

function increment(num) {
  if (typeof num !== 'number') {
    throw new Error('num should be type of number')
  }
  return num + 1
}
console.log(increment(1))
// increment('a') // Error

// instanceof
const array = [1, 2, 3]
console.log(array instanceof Array) // true
console.log(null instanceof Array) // false

function count(array) {
  if (!(array instanceof Array)) {
    throw new Error('array should be Array')
  }
  return array.length
}
console.log(count([1, 2, 3])) // 3
// console.log(count('123')) // Error

// null は objectになるため別の判定方法が必要
console.log(typeof { foo: 1 }) // object
console.log(typeof null) // object

function isObj(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('obj should be type of object')
  }
  if (typeof obj.name !== 'string') {
    throw new Error('obj.name should be type of string')
  }
}
isObj({ name: 'yt' })
// isObj('name') // Error
// isObj({ name: true }) // Error
