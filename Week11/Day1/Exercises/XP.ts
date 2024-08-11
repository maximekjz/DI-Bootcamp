// Exercice 1 : 

function sayHi(): void {
    console.log("Hello, World!");
}
sayHi()

// Exercice 2 : 

let age: number = 20;
let name: string = "Dan";

console.log("Age:", age);
console.log("Name:", name);

// Exercice 3 : 

let id: string | number 
id = 3 
console.log("id:", id);


// Exercice 4 : 

function checkNumber(num: number): string {
    if(num>0) {
         return "The number is positive"
    }
    else if (num === 0){
       return "The number is equal to zero"
    } 
    else {
        return "The number is negative"
    }
}

console.log(checkNumber(1));
console.log(checkNumber(0));
console.log(checkNumber(-1));

// Exercice 5 : 

function add(a: number | string, b :number | string): number | string {
    if (typeof a === 'number' && typeof b==='number')
        {return a+b}
    else if (typeof a === 'string' && typeof b==='string'){
        {return a+b}
    }
    else {
        return 'a & b are not the same type, impossible to add or concatenante'
    }
}  
// Exercice 6 : 

function getDetails(name: string, age: number) : [string, number, string] {
    const greeting =  `Hello ${name}, you are ${age}`
    return [name, age, greeting]
}

// Exercice 7 : 
function createPerson(name: string, age: number) : {name: string, age: number} {
    return {name: name, 
        age: age
    }
}

// Exercice 8 :

function htmlElement(){
    const inputElement = document.getElementById("input") as HTMLInputElement
    inputElement.value = "New input"
    console.log(inputElement.value);
}
htmlElement()

// Exercice 9 :

function getAction(role: string){
    let action: string

    switch(role){
        case 'player':
            action = 'Player:  you can play'
        case 'Admin':
            action = 'Admin:  you can manage settings'
        case 'Viewer':
            action = 'Viewer:  you can view content'
        default : 
            action = 'Role not define'
            break
    }
}

// Exercice 10 :

function greet(name?:string): string {
    if (name) {
        return (`Hi ${name})`)
    }
    {return 'Hello and welcome!'}
}
console.log(greet('John'));
console.log(greet());




