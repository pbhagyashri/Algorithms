//Iterative Solution

const steps = (n) => {
  
  for(let i = 0; i < n; i++) {
  	let pounds = ""
    for(let a = 0; a < n; a++) {	
      a <= i ? pounds += "#" : pounds += ' '
    }
		console.log(pounds.split(''))
  }
}

