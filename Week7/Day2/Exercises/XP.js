// Exercice 1 

// fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", {
//   method: "GET",
//   headers: {
//     "Content-type": "application:json",
//   },
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((post) => {
//     console.log(post);
//   })
//   .catch((e) => {
//     console.log(e);
//   });



// Eexercice 2

// fetch("https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2&limit=10", {
//   method: "GET",
//   headers: {
//     "Content-type": "application:json",
//   },
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((post) => {
//     console.log(post);
//   })
//   .catch((e) => {
//     console.log(e);
//   });



// Exercise 3 : Async Function


// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

// const info = async (url) => {
//     try {
//         let res = await fetch(url);
//         if (!res.ok) {
//             throw new Error('Network response was not ok ' + res.statusText);
//         };
//         let objectStarWars = await res.json();
//         console.log(objectStarWars.result);
//     }
//     catch(error) {
//         console.log(error)
//     }
// }

// info("https://www.swapi.tech/api/starships/9/")

// Exercice 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

// ---> it returns resolved after 2 sec

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// calling is printed and then after 2 seconds 'resolved' is also printed below 