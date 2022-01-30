function foo(a, b) {
  if (arguments.length > 2) {
    throw new Error('引数の数は2つまでです。')
  }
}
foo(1, 2)
// foo(1, 2, 3) // error

// allow function
const foo2 = (a, b, ...othoers) => {
  if (othoers.length > 0) {
    throw new Error('引数の数は2つまでです。')
  }
}

foo2(1, 2)
// foo2(1, 2, 3) // error
