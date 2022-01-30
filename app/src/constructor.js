// constructor

// basic
function Cat(name) {
  this.name = name
}

const cat = new Cat('mike')
console.log(cat)

// this function
function showThis() {
  console.log(this)
}
showThis() // => Window

// call of method and this
const foo = { name: 'Foo' }
foo.showThis = showThis
foo.showThis()

const obj = {
  getThis: function () {
    return this
  },
}

console.log(obj.getThis() === obj) // true

const getThis = obj.getThis

console.log(getThis() === obj) // false

// Allow Function

const allowShowThis = () => {
  console.log(this)
}
allowShowThis() // {}

const allowFoo = { name: 'Foo' }
allowFoo.allowShowThis = allowShowThis
allowFoo.allowShowThis() // {}

const foo2 = {
  getGetThis: function () {
    const getThis = () => {
      return this
    }
    return getThis
  },
}

const getThis2 = foo2.getGetThis()
console.log(getThis2() === foo2) // true

// arguments

function showArg() {
  console.log(arguments)
}
showArg('a', 'b', 'c') // [Arguments] { '0': 'a', '1': 'b', '2': 'c' }

// same arguments
function showArg2(a, a, a) {
  console.log(a)
}
showArg2('a', 'b', 'c') // c

// allow func
// const showArg3 = (a, a) => {} // error

// Function with the same name
function sameFunc() {
  console.log('No.1')
}
function sameFunc() {
  console.log('No.2')
}
sameFunc() // No.2

// allow func
// const sameFunc2 = () => {
//   console.log('No.1')
// }
// const sameFunc2 = () => {
//   console.log('No.2')
// }
// sameFunc2() // Error
