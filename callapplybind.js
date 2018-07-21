var obj = {num: 2};
var obj1 = {num: 4};

// Call
var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

console.log(addToThis.call(obj, 4, 2, 3))
//apply
var addArrayToThis = function(a, b, c) {
  return this.num + a + b + c;
}

var arg = [4, 2, 3]

console.log(addArrayToThis.apply(obj, arg))

//bind 
var bound = addToThis.bind(obj1)
console.log(bound(4, 2, 3))

