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
