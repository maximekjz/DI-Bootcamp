// 🌟 Exercise 1 

// The sentence will display with person's details

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// 🌟 Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(objUser){
    let first = objUser.first
    let last = objUser.last
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// 🌟 Exercise 3: User & Id

users = { user1: 18273, user2: 92833, user3: 90315 }
user_arr=[]
Object.entries(users).forEach(([key,value]) => {
    user_arr.push([key,value*2])
})
console.log(user_arr)


// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output? 
// Object -->  Member's type is an Object as we create object from class. Constructor is a method

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);


// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?
// 2 cause Dog has 1 attribute : name
// if we create a new class(Labrador) from calling a class (Dog), we'll use Dog's attribute -> name
// For that we use super(attribute). The new attributes in Dog have to be defined with 'this.attribute'
// All the attributes have to be declared in constructor

//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// False cause there are not numbers but 2 different arrays
// {} === {}
// False cause there are 2 different objects 

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
//  --> 5

const object2 = object1; 
//  --> 5

const object3 = object2; 
//  --> 5

const object4 = { number: 5};
//  --> 5


object1.number = 4; 
// --> 4 then obj 2=4 then obj3 = 4
console.log(object1.number) 
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color
    };
}

class Mamal extends Animal {
    constructor(name, type, color){
    super(name, type, color)
    };

    sound(sound) {
        return `${sound} I'm a ${this.type} named ${this.name} and I'm ${this.color}`
    }
}
let dog = new Mamal ('Rex', 'dog', 'black')
console.log(dog.sound('bark'))




// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
