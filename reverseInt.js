const reverseInt = (int) => {
  return parseInt(int.toString().split("").reverse().join(''))
}

console.log(reverseInt(500))
console.log(reverseInt(-51))