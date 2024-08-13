// Create a base class Animal with a method speak() that returns the string "The animal speaks". 
// Then, create a derived class Dog that extends Animal and overrides the speak() method to return the string "The dog barks".
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercice 1 : 
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        return 'Tha animal speaks';
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        return 'The dog barks';
    };
    return Dog;
}(Animal));
var dog = new Animal();
console.log(dog.speak());
var dog1 = new Dog();
console.log(dog1.speak());
var user1 = {
    id: 1,
    name: 'John',
    email: 'john@mail.com'
};
function getUserInfo(user) {
    var userInfo = '';
    for (var key in user) {
        if (user[key] !== undefined) {
            userInfo += "".concat(key, " - ").concat(user[key], " ");
        }
    }
    return userInfo;
}
console.log(getUserInfo(user1));
//Exercice 3 : 
// Create a function printInfo that accepts a union type of number or string. 
// The function should use a type guard to handle each type differently: 
// If the argument is a number, it should print “The number is: X”,
// and if it is a string, it should print “The string is: Y”.
function printInfo(arg) {
    if (typeof arg === 'number') {
        return "The number is: ".concat(arg);
    }
    else if (typeof arg === 'string') {
        return "The string is: ".concat(arg);
    }
    else {
        throw new Error('enter a number or a string');
    }
}
console.log(printInfo(10));
// Exercice 4 : 
function filterByProperty(array, property) {
    return array.filter(function (item) { return property in item; });
}
var users = [
    { id: 1, name: 'John', email: 'john@mail.com' },
    { id: 2, name: 'Anne' },
    { id: 3, name: 'Dan', email: 'dan@mail.com' }
];
var usersWithEmail = filterByProperty(users, 'email');
console.log(usersWithEmail);
