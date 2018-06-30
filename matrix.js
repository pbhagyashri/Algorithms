
const matrix = (n) => {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      
      counter++;
    }
    endColumn--;
    
    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
      // console.log(counter)
    }
    startColumn++;
  }

  console.log(results);
}

matrix(3)

//another Matrix problem

function highestProd(matrix) {
  var max_prod = 0;
  let newArray = [];
  let col = [];
  
  for (i = 0; i < matrix[0].length; i++ ) {
    matrix.forEach( array => {
      col.push(array[i])
    })
  }
  
  while (col.length > 0) {
    newArray.push( reduceArray(col.splice(0, matrix.length) ))
  }
   
  matrix.forEach(m => newArray.push(reduceArray(m)) )
  
  newArray.forEach(a => a > max_prod ? max_prod = a : max_prod)
  
  
  return max_prod;
}

highestProd(matrix) //, 320);