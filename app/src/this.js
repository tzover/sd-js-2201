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
