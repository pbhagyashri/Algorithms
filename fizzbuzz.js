const fizzBuzz = (int) => {
  let string = ''
  if (int % 15 === 0) {
    string = 'fizzbuzz'
  } else if (int % 3 === 0) {
    string = 'fizz'
  } else if(int % 5 === 0){
    string = 'buzz'
  } else {
    return int
  }
  return string
}

console.log(fizzBuzz(35))

