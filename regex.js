//Email recongnition

/[a-z!#?-_0-9.]*\@\w+\.\w+/

function makeAnagram(a, b) {
  
  var reForB = new RegExp(`[${b}]`, 'g')
  var removeFromA = a.match(reForB)
  
  var reForA = new RegExp(`[${a}]`, 'g')
  var removeFromB = b.match(reForA)
	
  var result = a.length - removeFromA.length + b.length - removeFromB.length
  return result
}