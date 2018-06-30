let a = [3, 2, 1]

function countSwaps(a) {

  let numSwaps = 0
  let firstItem = 0
  let lastItem = 0

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < (a.length - i - 1); j++) {
      let lesser = a[j + 1]
      if(a[j] > a[j + 1]) {
      	a[j + 1] = a[j]
        a[j] = lesser
        numSwaps += 1
      }
    }
  }
  
  firstItem = a[0]
  lastItem = a[a.length - 1]
  console.log(`Array was sorted in ${numSwaps} swaps.`)
  console.log(`First Element: ${firstItem}`)
  console.log(`Last Element ${lastItem}`)

}

countSwaps(a)