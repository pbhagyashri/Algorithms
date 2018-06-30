console.time("concatenation");

function fib(n) {
  let sum = [0, 1]
  if ( n == 0) {
    return n;
  }

  while(n > 0) {
    sum.push(sum[sum.length - 1] + sum[sum.length - 2])
    n -= 1
  }
  //fib(n)
  return sum[sum.length - 1]
}
console.time("concatenation");
console.log(fib(40))



//0, 1, 1, 2, 3



// function fib(n) {
//   let result = [0, 1]

//   for (let i = 0; i < n; i++) {
//     result.push(result[i] + result[i + 1])
//   }
//   console.log(result[result.length - 1])
// }

