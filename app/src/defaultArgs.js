const sayHello = (name) => console.log(`こんにちは!${name}さん!`)
sayHello()
sayHello('yt')

// 初期値代入
const sayHello2 = (name = 'yt') => console.log(`こんにちは!${name}さん!`)
sayHello2()
