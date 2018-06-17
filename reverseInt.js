const reverseInt = (int) => {
  let finalInt = 0

  let reversedInt = parseInt(int.toString().split("").reverse().join(''))
  
  return int > 0 ? reversedInt : -reversedInt
}

console.log(reverseInt(-90))
console.log(reverseInt(-15))