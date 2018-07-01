var s = "SOSSPSSQSSOR"

function marsExploration(s) {
	let letters_to_remove = 0
  
	let i = 0
  
  while (i < s.length) {
  	
  	let subs = s.substring(i, i+3)
  	
    if (subs !== 'SOS') {
    	subs[0] !== 'S' ? letters_to_remove += 1 : letters_to_remove += 0
      
      subs[1] !== 'O' ? letters_to_remove += 1 : letters_to_remove += 0
      
      subs[2] !== 'S' ? letters_to_remove += 1 : letters_to_remove += 0
    }
    
    i += 3
  }
  
  console.log(letters_to_remove)
  
}

marsExploration(s)