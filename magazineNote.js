var magazine = ['give', 'me', 'one', 'grand', 'today', 'night']
var note = ['give', 'one', 'grand', 'today', 'one']

function checkMagazine(magazine, note) {
 
  let magazineObj = {};
  let noteObj = {}
  let maxLength = 0
  magazine.length > note.length ? maxLength = magazine.length : maxLength = note.length

  let i = 0
  while (i < maxLength) {
 
    if (i < magazine.length){
    	magazineObj[magazine[i]] ? magazineObj[magazine[i]] += 1 : magazineObj[magazine[i]] = 1
    }
    
    if(i < note.length) {
    	noteObj[note[i]] ? noteObj[note[i]] += 1 : noteObj[note[i]] = 1
    }
    
    i++
  }
	
  let result = ''
  
  for (let j in noteObj) {
  	if (result == 'No') {
    	console.log(result)
    	return
    } 
    if(noteObj[j] === magazineObj[j]) {
      result = 'Yes'
    } else {
      result = 'No'
    }
  }
  console.log(result)
}

checkMagazine(magazine, note)