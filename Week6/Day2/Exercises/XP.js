// Exercice 1

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const order= (array)=>{
//     array.forEach((element, index) => {
//         console.log(`#${index+1} color  is ${element}`)
//     })
// }
// console.log(order(colors))

// let check_violet = (array) => {
//     let found = array.some((element) => {
//     return element ==='Violet'});
//     if(found){
//         return 'Yeah'}
//     else {return 'No...'}
// }
// console.log(check_violet(colors));



// 🌟 Exercise 2 : Colors #2


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
let color_sentence = (array,ordinals) => {
    array.forEach((element, index) => {
        let suffixe = index < ordinals.length ? ordinals[index] : ordinals[0]
        console.log(`#${index+1}${suffixe} color is ${element} `)
    });
}
console.log(color_sentence(colors, ordinal));



// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); ['bread', 'carrot', 'potato', 'chicken', "apple", "orange" ]

// ------2------
// const country = "USA";
// console.log([...country]); ["U","S","A"]

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray); 


// 🌟 Exercise 4 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

let helloUsers = users.map(item => {
    return `Hello ${item.firstName}`
})
console.log(helloUsers)

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

let fullStack = users.filter((item) => {
    return item.role === 'Full Stack Resident'
})
console.log(fullStack);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

let fullStackName = users.filter((item) => 
    item.role === 'Full Stack Resident').map((item) => {
        return item.lastName
})
console.log(fullStackName);

// 🌟 Exercise 5 : Star Wars
// Instructions
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const reduce_starWars = epic.reduce((accumulator, items)=> {
    return accumulator + ' '+ items
} )
console.log(reduce_starWars)
// 🌟 Exercise 6 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
let passed_course  = students.filter((item) => {
    return item.isPassed === true//).map((item) => {
    //return item.name
})
console.log(passed_course)

let passed_course_1  = students.filter((item) => {
    return item.isPassed === true}); 
passed_course.forEach((item) => {console.log(`Good job ${item.name}, you passed the course in ${item.course}`)})
