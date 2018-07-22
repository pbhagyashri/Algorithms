const capitalize = (string) => {
  let capStr = []
  capitalisedString = string.split(' ').forEach(word => {
  	capStr.push(word[0].toUpperCase()+word.slice(1))
  }) 
  return capStr.join(' ')
}

console.log(capitalize("a short sentence"))