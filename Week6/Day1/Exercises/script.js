/** scope */
// let y = 9;
// let y = 10;
// {
//   let y = 8;
//   console.log(y);
// }
// console.log(y);

// let i = 'a'
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// var y = 7;
// y = function(){};

// function x() {
//     var y = 5;
//     return y;
// }

// console.log(x())
// console.log(y);

/** hoisting */
// console.log(a);
// var a = "a";
// console.log(a);

// console.log(x());
// function x() {
//   return 5;
// }
// console.log(x());

// console.log(b);
// let b ='b'
// console.log(b);

/** default parameter */
function sum(x, y = 0) {
  if (x === undefined) x = 5;
  return x + y;
}
// console.log(sum(undefined, 8));

/** Coniditional / ternary operator   */
let x = 10;
let c;
if (x < 5) {
  c = 0;
} else {
  c = 1;
}

let d = x < 5 && x === 5 ? 0 : x === 5 ? 2 : 1;
// console.log(d);

/**
 * Create a function to check the year send to the function
 * If the year is after 2000, you should display "You are in the 21st century",
 * else you should display "You live in the Middle Age"
 */

function checkYear(year) {
  let result =
    year > 2000 ? "You are in the 22st century" : "You live in the Middle Age";

  return result;
}

// console.log(checkYear(2001));

/** template strings */
let name = "John";
let last = "Doe";

let greeting = "Hello,\n" + name + "\n" + last;
// console.log(greeting);

let greeting2 = `Hello,
${name} 
${last}`;

// console.log(greeting2);

/** functions */
// console.log(sum(2, 2));
function sum(a, b) {
  return a + b;
}
// console.log(sum(2, 2));

// console.log(sum2(2,2));
const sum2 = function (a, b) {
  return a + b;
};
// console.log(sum2(2, 2));

/** arrow function => */
const sum3 = (a, b) => {
  return a + b;
};
// console.log(sum3(4, 4));

const getValue = (val) => {
  return val;
};

const sum4 = (a, b) => a + b;

// console.log(sum4(6, 6));

/** no `arguments` object in arrow function */
function print() {
  console.log(arguments[0], arguments[1], arguments[2]);
}

// print("hello", 400, false);

const print2 = () => console.log(arguments);
// print2("hello", 400, false);

/** arrow function do not create thier own `this` */
/** later on object methods */
// let obj = {
//   a: 1,
//   b: function () {
//     return 3;
//   },
// };

/**
 * Using arrow function and ternary operator create a calculator
 * that returns the result of the calculus
 * depending on the operator : +, - , * , /
 */
const calculator = (a, b, operator) =>
  operator === "+"
    ? a + b
    : operator === "-"
    ? a - b
    : operator === "*"
    ? a * b
    : operator === "/"
    ? b !== 0
      ? a / b
      : "Division by zero"
    : "invalid operator";

/** self invoke function */
// ((val) => {
//   console.log("hello from " + val);
// })("space");

/** nested function */

function nested() {
  let b = "outer variable";

  function innerNested() {
    console.log(b);
    let a = "inner variable";
    console.log("hello from inner");
  }
  console.log(a);

  return innerNested;
}

// let result = nested()
// result();
// nested()();

function sumA(a) {
  return function sumB(b) {
    return a + b;
  };
  //   return sumB;
}

/** clousre / currying */
const sumAB = (a) => (b) => a + b;

let res = sumA(5);
// console.log(res);
// console.log(res(6));
// console.log(res(7));
// console.log(res(10));

let res1 = sumA(10);
// console.log(res1);
// console.log(res1(6));
// console.log(res1(7));
// console.log(res1(10));

// console.log(sumAB(6)(7));

function multi(a, b) {
  return a * b;
}
function sum(a, b) {
  return a + b;
}

function currying(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

let curryMulti = currying(multi);
let currySum = currying(sum);

// console.log(curryMulti);

// console.log(curryMulti(2)(4));
// console.log(currySum(2)(4));

// console.log(currying(sum)(2)(3));
// console.log(currying(multi)(2)(5));
// console.log(currying(multi)(2)(10));
// console.log(currying(multi)(2)(20));

/** exercise about currying */
const s = (num) => num * 2;
const s1 = (num) => num + 1;

const sumsum = (a, b) => (c) => a(b(c));
// console.log(sumsum(s1, s)(6));

/* by value vs. by reference */

let a = 10;
let b = a;
b = 5;

// console.log(a, b);

let arr = [1, 2, 3];
// let arr1 = arr;
// let arr1 = [...arr]
let arr1 = [].concat(arr);

arr1[1] = 0;

// console.log(arr, arr1);

// let obj = {
//   a: 1,
//   b: 2,
// };

// let obj1 = {...obj};
// let obj1 = Object.assign({}, obj);
// obj1.b = 0;

// console.log(obj, obj1);

/** exercise */
let user = {
  name: "John",
  last: "Doe",
  address: {
    city: "Tel Aviv",
  },
  arr: [1, 2, 3],
};

/**
 * Create a clone of user object
 * 1. change the last name - and log both object
 * 2. change the city - and log both object
 */

let user1 = { ...user };

user1.last = "aaa";
user1.address = { ...user.address };
user1.address.city = "Ramat Gan";

user1.arr = [...user.arr];
user1.arr[1] = 0;

// console.log(user, user1);

/** deep cloning - ??? */

/** Object */
/** create object */

/** copmuted / dynamic key */
// let dynamic = "city"

// let obj = {
//     name:"John",
//     last:"Doe",
//     age:26,
//     [dynamic]: 'tlv'
// }
// let obj1 = new Object()

// // console.log(obj, obj1);

// console.log(obj.name);
// console.log(obj["age"]);

// let getname = "name";
// console.log(obj[getname]);

// // obj.city = 'TLV'
// // obj["state"] = 'Israel'

// console.log(obj);

/** shorthand property / key & value */

let username = "John";
let email = "jjj@gmail.com";
let age = 25;

let obj = {
  username,
  email,
  age,
};

console.log(obj);

/** loop an object */
for( let x in obj) {
    console.log(x, obj[x]);
}