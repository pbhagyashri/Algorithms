const arrayChunk = (n, array) => {
  let newArray = []
    while (array.length > 0) {
      newArray.push(array.splice(0, n))
    }
    return newArray
  }
  
  console.log(arrayChunk(2, [1, 2, 3, 4, 5, 6, 7]))