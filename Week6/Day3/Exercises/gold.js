// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
let obj = {first: 'Elie', last:'Schoppik'}

let printFullName = (object) => {
    let {first: name, last:lname} = object
    return `Your full name is ${name} ${lname}`
};
console.log(printFullName(obj))

// Exercise 2 : Keys And Values
let keys = []
let values = []

let keysAndValues = (object) => {

    Object.keys(object).forEach((key) => {
        keys.push(key);
        values.sort()} 
) 
    Object.values(object).forEach((value) => {
        values.push(value);
    })
    

    return [keys, values]
}
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })) 


// Exercise 3 : Counter Class
// Instructions
// Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment(); 
// 1
counterOne.increment();
// 2
const counterTwo = counterOne; 
// COUNTERTWO = 2
counterTwo.increment();
// 3
console.log(counterOne.count);

// Exercice 4

class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
//   --> "I'm a bird. 🦢"
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
//   --> I'm pink. 🌸
  const pet = new Flamingo();

//   I'm a bird. 🦢 /  I'm pink. 🌸


