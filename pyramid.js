
const pyramid = (n) => {

  let midpoint = Math.floor((n * 2 -1) / 2)

  for (let row = 0; row < n; row++) {
    let stack = ''
    for(let column = 0; column < n * 2 - 1; column++ ) {
      if(midpoint - row <= column && midpoint + row >= column) {
        stack += '#'
      } else {
        stack += ' '
      }
    }
    console.log(stack.split(''))
  }
}

console.log(pyramid(4))

// [0, 1, 2, 3, 4, 5, 6]