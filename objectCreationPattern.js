// Factory Pattern

var peopleFactory = function(age, name, state) {
  var temp = {}
  
  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function() {
    console.log(`${this.name}, ${this.age}, ${this.state}`);
  };
  
  return temp;
};

var person1 = peopleFactory('john', 23, 'CA');
var person2 = peopleFactory('kim', 23, 'SF');

console.log(person1.printPerson())
console.log(person2.printPerson())

// Constructor Pattern

var peopleConstructor = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function() {
    console.log(`${this.name}, ${this.age}, ${this.state}`);
  }

}

var person1 = new peopleConstructor('reva', 5, 'PA')
console.log(person1.printPerson())

//Prototype Pattern

var peopleProto = function() {
  
}