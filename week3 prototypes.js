// this is the Parent prototype
//master

function Parent(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.location = attributes.location;
  this.phrase = attributes.phrase;
  // but it's better to separate methods so they don't get fired
  // off when you create a new object, nahmean?
  // this.speak = function(){
  //   console.log(`${this.name} sez ${this.phrase}`);
  // }
}

//so instead of this.speak, you wanna drift into the Parent DNA
Parent.prototype.speak = function() {
  console.log(`${this.name} sez ${this.phrase}`);
}

function Child(childAttributes){
  //this binds the 'this' keyword to Parent
  Parent.call(this, childAttributes)
  this.toy = childAttributes.toy;
}

//this sets up the __proto__ and allows us to use methods across all objects
Child.prototype = Object.create(Parent.prototype);



//this is a Parent object
//instance
const homer = new Parent({
  'age': 46,
  'name': 'Homer',
  'location': 'Springfield',
  'phrase': 'D\'oh!'
});

//another instance
const marge = new Parent({
  'age': 49,
  'name': 'Marge',
  'location': 'Springfield',
  'phrase': 'Mmmmmmmm'
});

//okay cool guy, now here's a Child object that inherets some
//properties from the parent
const bart = new Child({
  'age': 13,
  'name': 'Bart',
  'location': 'Springfield',
  'phrase': 'Eat my shorts',
  'toy': 'skateboard'
});




console.log(bart.age)