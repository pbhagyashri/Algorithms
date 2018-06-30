const cleanupString = (string) => {
  let newString = string.replace(/[^a-zA-Z]/g, '').toLowerCase()
  return newString
} 

const anagram = (stringA, stringB) => {
  return cleanupString(stringA).split('').sort().join('') === cleanupString(stringB).split('').sort().join('') ? true : false
}

console.log(anagram("Hello world!", "eHllo orwdl@"))