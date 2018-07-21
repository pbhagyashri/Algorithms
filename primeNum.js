let n = 69

// function isPrime(n){

//   let divisor = 2

//   while (divisor < n) {

//     if(n % divisor === 0) {
//       return true
//     } else {
//       divisor ++
//     }

//   }
//   return false

// }
// console.log(isPrime(n))

// function primeFactors(n){
//   let allFactors = []
//   let divisor = 2

//   while (divisor < n){

//     if(n % divisor === 0) {
//       allFactors.push(divisor)
//     }
//     divisor++
//   }
//   return allFactors

// }

// console.log(primeFactors(69))

function fibonacci(n){
  if(n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  
}

console.log(fibonacci(12))