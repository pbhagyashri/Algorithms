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

// selecting words that starts with an alphabet and ends with s. Also word can not start with a digit

^[^1-9]*[a-zA-Z]*s


//selecting web urls http://www.askoxford.com/concise_oed/train?view=uk
http:\/\/www.[a-z.a-z]*\/[a-z_\/?=]*

// detecting commenting in code - /**  **/
^\/\** [a-z\s**]*\/$