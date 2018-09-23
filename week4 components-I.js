//NOTES


// Josh's codepen demo
const home = document.querySelector('.home');
const testing = document.querySelector('.testing');

home.addEventListener('click', (event) => {
  console.log('we clicked home!');
});

// Step 3: Build the component
class Button {
  constructor(domElement) {
    this.domElement = domElement;
    this.domElement.addEventListener('click', this.btnClick);
  }
  btnClick(event) {
    event.stopPropagation();
    console.log(`I clicked on ${event.currentTarget.className}`);
    
    if(event.currentTarget.classList.contains("btn-2")) {
      console.log('Button 2 was clicked!');
    }
    
    event.currentTarget.style.color = "red";
    testing.classList.toggle('change');
  }
}

// Step 1: Grab all the "data" from the DOM
let buttons = document.querySelectorAll('.btn-component');

// Step 2: Mount our component to the DOM
buttons = Array.from(buttons).map( domElement => {
  return new Button(domElement);
});








// K. Fitzpatrick's notes
// STEP 1- create class holding the logic of the desired element behavior, in this case listening

class Button {
  constructor(domElement) {
    this.domElement = domElement;
    this.domElement.addEventListener('click', this.btnClick);
  }
  btnClick(event) {
    event.stopPropagation();
    console.log("a click has occured!");
  }
}

//STEP 2 - initial value assignment, aka grabbing all the elements from the webpage

let buttons = document.querySelectorAll('.btn');

//STEP 3 - now that we have the initial value, 'buttons' can be manipulated and then 
//reassigned the value that results from the manipulation (**the left side of '=' evaluates first)

buttons = Array.from(buttons).map(domElement => {
  return new Button(domElement);
});

// NOTE --- in this case, we're creating an array of the original buttons and then converting 
//each array item to the new smart button as described in Button class