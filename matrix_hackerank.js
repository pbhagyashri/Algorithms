var arr = [ 
  [1, 2, 3, 4, 5, 6], 
  [7, 8, 9, 10, 11, 12], 
  [13, 14, 15, 16, 17, 18], 
  [19, 20, 21, 22, 23, 24], 
  [25, 26, 27, 28, 29, 30], 
  [31, 32, 33, 34, 35, 36]
  ]
  
function hourglassSum(arr) {
  	     
  let startRow = 0
  let endRow = 2
  let startCol = 0
  let endCol = 2
    
  let sum = 0
  // Top Left Corner (0 - 3)
   
  let rowSum = []
  let subSum = 0
  
  while( startCol <= 3 && startRow <= 3) {
    subSum = 0
  	for(let row = startRow; row <= endRow; row++) {
    	
      for(let col = startCol; col <= endCol; col ++) {
        
      	if(row == startRow || row == endRow) {
          subSum += arr[row][col]
          rowSum.push(arr[row][col])
        } else if (row == startRow + 1) {
          rowSum.push(arr[row][startCol+1])
          subSum += arr[row][startCol+1]
          break
        } 
      }
      
    }
    
    startRow++
    endRow++
    subSum > sum ? sum = subSum : sum
} //WHile Loop

if(endRow == 6) {
  startRow = 0

  //startCol = 3


  while( startCol < 6) {
    
    for(let row = startRow; row < endRow; row++) {
      
      for(let col = 3; col < 6; col++) {
        //console.log('bye')
        console.log(arr[row][col])
      }
      startCol++
    }


    startRow++
    startCol++
  }

}

//console.log('rowSum', rowSum)
console.log('sum', sum)
}
    
console.log(hourglassSum(arr))