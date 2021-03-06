# Description

> Software Design 2022 01 にて記載されている JavaScript の Output

# Usage

```
git clone git@github.com:tzover/sd-js-2201.git
cd sd-js-2201
docker-compose up -d
docker-compose exec app bash
```

## JavaScript

### Hello World

- index.html を LiveServer で表示 ( 5500Port )

  - Extentions で LiveServer を install する

  - index.html を 作成

    ```
    touch src/index.html

    ---
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Software Design 2022-01</title>
    </head>
    <body>
      <h1>JavaScriptを試すページ</h1>
      <script>
        console.log('Hello World')
      </script>
    </body>
    </html>
    ```

  - 右下にある Go Live を押す

### Functions

- ES5 と ES6 での Function の記述方法とその違いを理解する

  > [Qiita: ES5 と ES6 の違い](https://qiita.com/rifutan/items/a55f132d4dae7e2f1941)

  - function.js を作成

    ```
    touch src/function.js

    ---
    // アロー関数 (es6)

    // es5 までの書き方
    // function func1(str) {
    // return str
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
    console.log(func1('func1 です。'))
    console.log(func2('func2 です。'))
    console.log(func3('func3 です。'))

    // allow function は return の省略が可能
    const func4 = (num1, num2) => num1 + num2
    console.log(func4('func4 です。', 10, 20))

    // allow function return 省略しない書き方
    // const func4 = (num1, num2) => {
    // return num1 + num2
    // }

    // return value
    // return void
    const func5 = (str) => console.log(str)

    // return string
    const func6 = (str) => str

    console.log(func5('func5 です。'))
    console.log(func6('func6 です。'))
    ```

  - function.js を実行 (戻り値が void の時の動き func5)

    ```
    node src/function.js

    ---
    func1です。
    func2です。
    func3です。
    func4です。10
    func5です。
    undefined
    func6です。
    ```

  - ES5 と ES6 での map 関数記述方法の違い

    ```
    // ES5
    [1, 2, 3].map(function(n) {
      return n + 1
    })

    // ES6
    [1, 2, 3].map((n) => n + 1)

    ---
    touch src/map.js

    ---
    const result = [1, 2, 3].map((n) => n + 1)
    console.log(result)
    ---

    node src/map.js

    ---
    // Output
    [2, 3, 4]
    ```

  - Constructor

    ```
    touch src/constructor.js

    ---
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

    ---

    node src/constructor.js

    ---
    // Output
    Cat { name: 'mike' }
    <ref *1> Object [global] {
      global: [Circular *1],
      clearInterval: [Function: clearInterval],
      clearTimeout: [Function: clearTimeout],
      setInterval: [Function: setInterval],
      setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
      },
      queueMicrotask: [Function: queueMicrotask],
      performance: Performance {
        nodeTiming: PerformanceNodeTiming {
          name: 'node',
          entryType: 'node',
          startTime: 0,
          duration: 56.171499997377396,
          nodeStart: 0.3709999993443489,
          v8Start: 2.1314589977264404,
          bootstrapComplete: 35.433458998799324,
          environment: 20.178958997130394,
          loopStart: -1,
          loopExit: -1,
          idleTime: 0
        },
        timeOrigin: 1643514993647.405
      },
      clearImmediate: [Function: clearImmediate],
      setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
      }
    }
    { name: 'Foo', showThis: [Function: showThis] }
    true
    false
    {}
    {}
    true
    [Arguments] { '0': 'a', '1': 'b', '2': 'c' }
    c
    No.2
    ```

  - Callback function

    ```
    touch src/callback.js

    ---
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

    ---

    node src/callback.js

    ---
    // Output
    [ 2, 4 ]
    [ 2, 4 ]
    ```

  - this

    ```
    touch src/this.js

    ---
    const price = {
      value: 100,
      yen1: function () {
        return this.value + 'yen.'
      },
      yen2: () => this.value + 'yen.',
      yen3: () => price.value + 'yen.',
    }
    console.log(price.yen1())
    console.log(price.yen2())
    console.log(price.yen3())

    ---

    node src/this.js

    ---
    // Output
    100yen.
    undefinedyen.
    100yen.
    ```

## Arguments

- JavaScript には引数チェックが無いため、関数宣言時の引数に対して呼び出し時の引数が不足していても多くても問題なく実行される（少ない場合は undefined になる）

  ```
  touch src/args.js

  ---
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
  ---

  node src/args.js

  ---
  // Output
  2
  2
  1 undefined
  1 2
  1 undefined
  ```

- 文字の長さを返す Length メソッドに Null を入れたときの挙動

  ```
  touch src/length.js


  ---
  function countCharacters(str) {
    console.log('Doing')
    return str.length
  }
  countCharacters(null) // Error
  ---

  node src/length.js

  ---
  // Output
  TypeError: Cannot read properties of null (reading 'length')
  at countCharacters (/home/node/app/src/length.js:3:14)
  at Object.<anonymous> (/home/node/app/src/length.js:5:1)
  at Module._compile (node:internal/modules/cjs/loader:1101:14)
  at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
  at Module.load (node:internal/modules/cjs/loader:981:32)
  at Function.Module._load (node:internal/modules/cjs/loader:822:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  at node:internal/main/run_main_module:17:47
  ```

- 引数の数をチェックする

  ```
  touch src/checkArgs.js

  ---
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
  foo2(1, 2, 3) // error
  ---

  node src/checkArgs.js

  ---
  // Output
  /home/node/app/src/checkArgs.js:3
  throw new Error('引数の数は2つまでです。')
  ^

  Error: 引数の数は2つまでです。
    at foo (/home/node/app/src/checkArgs.js:3:11)
    at Object.<anonymous> (/home/node/app/src/checkArgs.js:7:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
  ```

- 引数の型をチェックする

  ```
  touch src/checkArgType.js

  ---
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
  ---

  node src/checkArgType.js

  ---
  // Output
  number
  2
  true
  false
  3
  object
  object
  /home/node/app/src/checkArgType.js:36
    throw new Error('obj.name should be type of string')
    ^

  Error: obj.name should be type of string
    at isObj (/home/node/app/src/checkArgType.js:36:11)
    at Object.<anonymous> (/home/node/app/src/checkArgType.js:41:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
  ```

- 引数の初期値

  ```
  touch src/defaultArgs.js

  ---
  const sayHello = (name) => console.log(`こんにちは!${name}さん!`)
  sayHello()
  sayHello('yt')

  // 初期値代入
  const sayHello2 = (name = 'yt') => console.log(`こんにちは!${name}さん!`)
  sayHello2()
  ---

  node src/defaultArgs.js

  ---
  // Output
  こんにちは!undefinedさん!
  こんにちは!ytさん!
  こんにちは!ytさん!
  ```

### Spred

- 残余引数と分割代入

  ```
  touch src/spred.js
  ```
