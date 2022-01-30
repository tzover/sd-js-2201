// callback function

// allow function
const num = [1, 2, 3, 4]
const even = num.filter((n) => n % 2 === 0)
console.log(even) // [ 2, 4 ]

// es5
const even2 = num.filter(function (n) {
  return n % 2 === 0
})
console.log(even2) // [ 2, 4 ]
