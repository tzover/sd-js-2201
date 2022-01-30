// アロー関数 (es6)

// es5までの書き方
// function func1(str) {
//     return str
// }

// Function (es5)
const func1 = function (str) {
  return str
}
function func2(str) {
  return str
}

// アロー関数
const func3 = (str) => {
  return str
}

// Call functions
console.log(func1('func1です。'))
console.log(func2('func2です。'))
console.log(func3('func3です。'))

// allow function は return の省略が可能
const func4 = (num1, num2) => num1 + num2
console.log(func4(10, 20))

// allow function return 省略しない書き方
// const func4 = (num1, num2) => {
//     return num1 + num2
// }
