//How to reverse a string using Javascript

//First Approach 
const reverseString = (string) => {
  return string.split("").reverse().join("")
}

//Second Approach 

const reverseString = (string) => {
  let reversed = ""
  
  string.split("").forEach(s => reversed = s + reversed)
  
  return reversed
    
}

//Third Approach with reduce

const reverseString = (str) => {
  return str.split('').reduce( (rev, char) => char + rev, '')
}

console.log(reverseString("hello"))