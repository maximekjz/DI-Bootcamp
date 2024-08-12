// Exercice 1 : 
// Create a class Person with the following properties:

// A private property firstName of type string.
// A private property lastName of type string.
// A public property age of type number.
// A protected property address of type string.
// Also, include a constructor to initialize these properties and a method getFullName that returns the full name of the person.

// class Person {
//     private firstName: string
//     private lastName: string
//     public age: number
//     protected address: string

//     constructor(firstName: string, lastName:string, age: number, address: string){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.address = address
//     }

//     getFullName(){
//         return `My name is ${this.firstName} ${this.lastName} `
//     }
// }

//     let person1 = new Person('John', 'Levi', 20, 'Tel Aviv')
//     console.log(user1.getFullName());
    
// Exercice 2 
// interface Vehicle{
//     make:string;
//     model: string
//     start(): string
// }

// interface Car extends Vehicle {
//     numberOfDoors: number;
// }


// class Sedan implements Car {
//     public _numberOfDoors: number
//     public _make: string
//     public _model: string


//     constructor (numberOfDoors: number, make:string, model:string){
//         this._numberOfDoors = numberOfDoors
//         this._make= make 
//         this._model = model
// }

// start(): string{
//     return `The ${this._make} ${this._model} with ${this._numberOfDoors} is starting.`;
// }
// }

// const mySedan = new Sedan(5, "Renault", "Clio");
// console.log(mySedan.start()); 

// Exercice 3

// Create a function combineObjects that accepts two objects and combines them using intersection types. The function should return a new object containing all properties from both input objects.

// In this exercise, a function combineObjects accepts two objects of types T and U and returns a new object containing all properties from both input objects using intersection types. The function uses the spread operator to combine the properties of the two objects.

// function combineObjects<T, U>(obj1: T, obj2: U): T & U {
//     return {...obj1,...obj2}
// }

// const objT = {a: 1}
// const objU = {b: 2}

// console.log(combineObjects(objT, objU));

//Exercice 4:
// Create a generic class Stack<T> that supports the following operations:

// A push method that adds an element of type T to the stack.
// A pop method that removes the top element from the stack and returns it.
// An isEmpty method that checks whether the stack is empty.
// In this exercise, a generic class Stack<T> represents a stack data structure. The class supports operations such as push, pop, and isEmpty. The push method adds an element of type T to the stack, the pop method removes and returns the top element, and the isEmpty method checks if the stack is empty.


// class Stack<T> {
//     private items : T[]=[]

//     push(element:T) {
//         this.items.push(element)
//     }
//     pop():T | undefined {
//         return this.items.pop()
//     }
//     isEmpty(): boolean {
//         return this.items.length ===0
//     }
// }

// const numberStack = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);
// console.log(numberStack.pop()); 
// console.log(numberStack.isEmpty());
// console.log(numberStack.pop()); 
// console.log(numberStack.isEmpty());

// const stringStack = new Stack<string>();
// stringStack.push("hello");
// stringStack.push("world");
// console.log(stringStack.pop()); 
// console.log(stringStack.isEmpty());

//Exercice 5 
// Create a generic function filterArray<T> that accepts an array of type T and a predicate function (element: T) => boolean.
// The function should return a new array containing elements that satisfy the predicate.

// In this exercise, a generic function filterArray<T> accepts an array of type T and a predicate function (element: T) => boolean. The function returns a new array containing elements that satisfy the predicate function. This approach demonstrates how to use generics with functions to create flexible and reusable code for filtering arrays of various types.

function filterArray<T> (arr: T[], predicate:(element:T) => boolean): T[] {
    return arr.filter(predicate)
}
const numbers = [1, 2, 3, 4];
const filterNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(filterNumbers); 
