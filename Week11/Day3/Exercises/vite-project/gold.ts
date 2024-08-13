// Create a base class Animal with a method speak() that returns the string "The animal speaks". 
// Then, create a derived class Dog that extends Animal and overrides the speak() method to return the string "The dog barks".

// Exercice 1 : 

class Animal {
    animal
    speak(){
        return 'Tha animal speaks'
    }
}

class Dog extends Animal {
    speak(){
        return 'The dog barks'
    }
}

let dog = new Animal();
console.log(dog.speak());
let dog1 = new Dog()
console.log(dog1.speak());


// class Animal {
//     animal : string

//     constructor(animal:string){
//         this.animal= animal
//     }

//     speak(){
//         return `the ${this.animal} speaks`
//     }
// }

// let dog = new Animal('Dog')
// console.log(dog.speak());


// Exercice 2 : 
// Create an interface User with properties id (number), name (string), and an optional property email (string).
// Then, create a function getUserInfo that accepts an object of type User and returns a string with the user’s information.

interface User {
    id: number;
    name: string;
    email?: string;
}

let user1 : User = {
    id:1,
    name:'John',
    email:'john@mail.com'
}

function getUserInfo(user: User):string {
    let userInfo = ''
    for(let key in user){
        if(user[key as keyof User] !== undefined){
        userInfo += `${key} - ${user[key as keyof User]} `
        }
    }
    return userInfo
}
console.log(getUserInfo(user1));

//Exercice 3 : 
// Create a function printInfo that accepts a union type of number or string. 
// The function should use a type guard to handle each type differently: 
// If the argument is a number, it should print “The number is: X”,
// and if it is a string, it should print “The string is: Y”.

function printInfo (arg: number | string): string {
    if(typeof arg ==='number'){
        return `The number is: ${arg}`
    } 
    else if (typeof arg ==='string'){
    return `The string is: ${arg}`}
    else {
        throw new Error('enter a number or a string')
    }
}

console.log(printInfo(10));

// Exercice 4 : 
function filterByProperty<T, K extends keyof T>(array: T[], property: K): T[] {
    return array.filter(item=> property in item)
}

interface User {
    id: number;
    name: string;
    email?: string;
}

const users: User[] = [
    { id: 1, name: 'John', email: 'john@mail.com' },
    { id: 2, name: 'Anne' }, 
    { id: 3, name: 'Dan', email: 'dan@mail.com' }
];

const usersWithEmail = filterByProperty(users, 'email');
console.log(usersWithEmail);

// Exercice 5 : 
// Create a generic interface Store<K, V> with methods set(key: K, value: V): void and get(key: K): V | undefined. 
// Then, create a generic class KeyValueStore<K, V> that implements the Store<K, V> interface.

interface Store<K, V> {
    set(key: K, value: V): void;   
    get(key: K): V | undefined;    
}


