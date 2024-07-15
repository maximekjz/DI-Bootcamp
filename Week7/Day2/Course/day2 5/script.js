/** fetch */
/** Async / await */

// let url = "https://jsonplaceholder.typicode.com/posts?userId=4";

// let options = {
//   method: "GET",
//   headers: {
//     "Content-type": "application:json",
//   },
//   body: JSON.stringify({ name: "John", paswword: "1q2w3e" }),

// };

// let value = "meat balls";
/** urlparameters */
// const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=${value}&number=1`;
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "8e714f6b88mshbdeb3af21b66p17c12cjsnb08e0581e35c",
//     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };

// fetch(url, options)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/**
 * response.json() -> JSOM.parse -> promise
 * response.text() -> text -> return promise
 */

/**
 * https://jsonplaceholder.typicode.com/posts
 * fetch with Post request
 * {userId:4, title:'my title 3',body:'bla bla bla' }
 *
 */

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({ userId: 4, title: "my title 3", body: "bla bla bla" }),
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

// fetch("https://users-18kl.onrender.com/usersjson")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
/**
1. Create an HTML form in your index.html file with inputs for name, username, and email, 
and a submit button.
2. When the form is submitted, send a POST request to https://users-18kl.onrender.com/userjson 
with a JSON data, example
{name:'...',username:'...', email:'...'}.
3. Display the response data on the page.
 */

function submitForm(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let username = e.target.username.value;
  let email = e.target.email.value;
  console.log(name, username, email);
  fetch("https://users-18kl.onrender.com/userjson", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, username, email }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      render(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>${item.name} ${item.username} ${item.email}</div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};

/** async / await */

// async function x() {
//   // return 5;
//   throw new Error('opps...')
// }

// x()
// .then(data => {
//   console.log(data);
// })
// .catch(e=>{
//   console.log(e);
// })

const getX = async () => {
  return 5;
};

const getY = async () => {
  // return 6;
  throw new Error("reject promise");
};

// getX()
//   .then((x) => {
//     getY()
//       .then((y) => {
//         console.log(x + y);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getXY() {
  try {
    let x = await getX();
    console.log("x=>", x);
    let y = await getY();
    console.log("y=>", y);
    console.log(x + y);
  } catch (e) {
    console.log(e);
  }
}
// getXY();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const info = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // return data;
    render(data);
  } catch (error) {
    console.log(error);
  }
};
info("https://jsonplaceholder.typicode.com/users");
// info("https://jsonplaceholder.typicode.com/users").then((users) =>
//   console.log(users)
// );

/** Warning - async/await  */
