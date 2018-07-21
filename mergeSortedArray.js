let myArray = [3,  4,  6, 10, 11, 15]

let alicesArray = [1,  5,  8, 12, 14, 19] 

function mergeArrays(myArray, alicesArray) {

	var mergedArray = []
  var i = 0;
  
  while (i < myArray.length) {

    if(myArray[i] < alicesArray[i]) {
      mergedArray.push(myArray[i])
      mergedArray.push(alicesArray[i])
    } else {
      mergedArray.push(alicesArray[i])
      mergedArray.push(myArray[i])
    }

    i++
  }

  console.log(mergedArray)

}

mergeArrays(myArray, alicesArray)