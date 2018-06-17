const maxChar = (string) => {
  let max = 0;
  let maxChar = '';
  let charObj = {}

  string.split('').forEach( s => {
    (charObj[s]) ? charObj[s]++ : charObj[s] = 1
  })
  
  for (let char in charObj) {
    if(charObj[char] > max) {
      max = charObj[char]
      maxChar = char
    }
  }
  return maxChar
}

console.log(maxChar("abbbbcdef"))