// 🌟 Exercise 1 : Comparison


// let compareToTen = (num) => {
//     return new Promise(function(resolve, reject){
//     if(num<=10){resolve('The number is less than or equal to 10')}
//     else {reject('The number is greater than 10')}
// })
// }

// compareToTen(9)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))



// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// let resolve_itself = new Promise((resolve, reject)=> {
//         setTimeout(()=> {resolve('succes')},4000)
//     })
// resolve_itself.then(result => console.log(result));

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let promise_resolve = Promise.resolve(3)
    promise_resolve.then(result => console.log(result))

let promise_reject = Promise.reject('Boo !')
    promise_resolve.catch(error => console.log(error))

// Exercise 4: Quizz - Not Mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.

