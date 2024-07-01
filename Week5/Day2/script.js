/** js types
 * Numbers 10, 10.5 , -9
 * String - 'string' "string" `string`
 * Boolean true / false - 0-false
 * Undefined
 * Null
 */

/** js variables */
// var
// let
// const
var myname = "John";
var num = 10;
var yes = true;

/** ES6 */
let a;
a = null;

const redcolor = "#ff3rdf";

var x = 6;
var x = 0;

let y = 0;
// let y =7;

// const b = 9;
// b = 10;

/** naming */
// let st1r2 = "str";
// // let str# = 'str'
// let my_name = "bella";
// let myName = "Marry";
// let _name = "John";

/**
 * keywords
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
*/

// comments

/*

*/

/**
 * @author zivuch
 * @description
 */

// console.log("hello");

/** Stings */

// let str = "Hello \n js";

// let str2 = `Javascript
// React
// node
// `;
// let str3 = str + " " + str2;

// console.log(str3);

// console.log(str3.length);

// console.log(str3.indexOf('React'));

// console.log(str3.toLowerCase());

// console.log(str3.replaceAll('a', 'AA'));

// let hello = '                hello   ';
// console.log(hello.trim());

// let d = "3";
// let z = 4;
// console.log(Number(d) + z);
// console.log(parseInt(d) + z);

// console.log(Number("a"));

// console.log(isNaN(33));

/** comparison */
/**
 * ==
 * ===
 * !=
 * !==
 * >
 * <
 * >=
 * <=
 */

/** operator */
/**
 * ++x
 * x++
 * --y
 * y--
 * +=   x = x + 2 / x += 2
 */

// let b = 3, d = b, u = b;
// b = 3
// d = 3
// u = 3

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u

// console.log(tree); // 163
// // d = 4
// 4 * 4 * 3 * 3 +
// 3 + 4 +
// 3 * 3 +
// 3

/** user interface functions */

// alert('Wow!')

// let str = prompt('What is your name?',20)
// console.log(str);

// let yesno = confirm('Are you going to the party?')
// console.log(yesno);

/** Arrays */

// const arr = [3, 4, "hello", true, [1, 2, 3]];
// let arr1 = new Array();

// console.log(arr[4][1]);

// arr[2] = 5;

// console.log(arr);

/** array methods */

// let arr = ['Banana','Orange','Apple', 'Mango']
/** length */
// console.log(arr.length);

// arr[arr.length] = 'Kiwi';

/** push pop*/
// arr.push('Lemon');
// let kiwi = arr.pop()

// console.log(arr, kiwi);

/** unshift / shift */
// arr.unshift('lemon')
// arr.shift()
// arr.shift()
// console.log(arr);

/** toString() */

// console.log(arr.toString());

/** join */
// console.log(arr.join(','));

// let arr1 = ['Lemon', 'aaa']
// let arr4 = ['bbb','ccc']

// let arr3 = arr1.concat(arr, arr4);

// console.log(arr3);
// let arr = ['Banana','Orange','Apple', 'Mango']
/** slice */
// let arr1 = arr.slice(1,3)
// console.log(arr1);

/** splice */
// let arr2 = arr.splice(0,2);
// console.log(arr, arr2);

/** Object */
// let obj = {}
// let obj1 = new Object()
// let obj = {
//     // key: 'value',
//     name: 'John',
//     email: 'jjj@gmail.com',
//     age: 26
//     // arr: [1,2,3,4],
//     // address: {
//     //     city:'TLV',
//     //     country: 'ISR'
//     // },
//     // 6: 66
// }

// console.log(obj.name);
// console.log(obj["email"]);
// console.log(obj['6']);

// obj.address["city"] = 'tel aviv';
// console.log(obj);

// obj['username'] = 'johnjohn'
// delete obj.age
// console.log(obj);

/** conditions */
/**
 * if
 * else if
 * else
 * switch
 */
// const num1 = 5;
// let num2 = 6;
// if (num1 === num2) {
//   console.log("true");
// } else if (num1 > num2) {
//   console.log("lower");
// } else {
//   console.log("default");
// }

// switch ("homepage") {
//   case "contact":
//     console.log("contact page");
//     break;
//   case "about page":
//     console.log("about");
//     break;
//   default:
//     console.log("homepage");
// }

/** logical  operators*/
/**
 * && - and
 * || - or
 * ! - not
 */
// const num1 = 5;
// let num2 = 6;
// let num3 = 6;
// if(!(num1 === num2 && num2 === num3)) {
//  console.log('bla bla bal');
// }

/** loops */
let users = ["John", "Marry", "Anne"];
for (let i = 0; i < 5; i++) {
  //   console.log(i);
}
for (let i = 2; i < users.length - 2; i++) {
  // console.log(i, users[i]);
}

for (let x in users) {
  // console.log(x, users[x]);
}

for (let x of users) {
  //   console.log(x);
}

/** while
 *
 * while(){
 *
 * }
 */
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
let i = 0;
do {
  console.log("do while " + i);
  i++;
} while (i < 0);
