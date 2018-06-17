// How to solve a Palindrome

//Solution 1
const palindrome = (string) => {
  return string.split("").reverse().join("") === string ? true : false
}

console.log(palindrome("cabba"))