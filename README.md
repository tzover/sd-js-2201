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

  -
