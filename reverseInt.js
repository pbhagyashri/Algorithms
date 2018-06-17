const reverseInt = (int) => {
  let reversedInt = parseInt(int.toString().split("").reverse().join(''))
  return int > 0 ? reversedInt : -reversedInt
}

const reverseInt = (int) => {

  let reversedInt = parseInt(int.toString().split("").reverse().join(''))
  return reversedInt * Math.sign(int)
}

console.log(reverseInt(90))
console.log(reverseInt(-15))