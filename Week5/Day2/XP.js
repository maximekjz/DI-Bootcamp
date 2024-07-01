// 🌟 Exercise 1 : List Of People
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift()
console.log(people)

// Write code to replace “James” to “Jason”.
people[3]='Jason'
console.log(people)

// Write code to add your name to the end of the people array.
people.push('Maxime')
console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
let copy_slice=people.slice(1,4)
console.log(copy_slice)

// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo'))
// It returns -1 cause Foo doesn't exist in people.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length-1]
console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
i=0
while (i < people.length) {
    console.log(people[i])
    i ++
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.


// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const colors = ['blue', 'green', 'yellow', 'grey', 'orange'];
choices=[]
suffixe = ['1st', '2nd', '3rd', '4th', '5th']
// for (let j = 0; j < colors.length; j++) {
//     choices.push(`My #${j + 1} choice is ${colors[j]}`)
// }
// console.log(choices.join(', '));

for (let j = 0; j < colors.length; j++) {
    choices.push(`My ${suffixe[j]} choice is ${colors[j]}`)
}
console.log(choices.join(', '));

// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let number;

// do {
//     number = prompt('Chose a number');
//     number = Number(number)
// } while (number > 10);

// console.log('You select a number smaller than 10: ', number)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

const rooms_rent = building.numberOfRoomsAndRent

console.log(`There are ${building.numberOfFloors} floors in the building`);
console.log(`There are ${building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.secondFloor + building.numberOfAptByFloor.thirdFloor } floors in the building`);
console.log(`The second tenant is ${building.nameOfTenants[1]} and he owes ${rooms_rent.dan[0]} appartments`);

if (rooms_rent.sarah[1] + rooms_rent.david[1]>rooms_rent.dan[1]) {
    rooms_rent.dan[1]+=1200
}

console.log(rooms_rent.dan[1])

// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
const family = {
    lastName: "Smith",
    city: "TLV",
    members: ["Rick", "Morty", "Summer"],
    ages: {
        Rick: 65,
        Morty: 13,
        Summer: 16
    }
};
console.log(family);

for (keys in family) {
    console.log(keys)
};

for (values in family) {
    console.log(family[values])
};
// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
sentence=[]

for(values in details) {
    sentence.push(`${values} ${details[values]}`)
}

console.log(sentence.join(' '))

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

first_letter = []

for (let l = 0; l< names.length; l++){
    first_letter.push(names[l][0])
}

first_letter.sort()
console.log(first_letter)