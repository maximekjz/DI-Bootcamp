const {people} = require("./data");
console.log(people)
const age = (people) =>{
    const sum_age = people.reduce((sum, person) => sum + person.age,0)
    const average = sum_age / people.length
    console.log('The average age is ' + average)
}   
age(people)