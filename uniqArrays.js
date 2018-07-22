var a  = ['apple', 'grape', 'orange', 'apple', 'grape'];

var uniqArray = a.filter((num, i) => {
	return a.indexOf(num) === i
})

console.log(uniqArray)