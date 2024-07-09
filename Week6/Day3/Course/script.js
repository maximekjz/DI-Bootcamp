/** Object & Classes */

let user = {
  name: "John",
  email: "jjj@gmail.com",
  age: 26,
};

// console.log(user.name, user["name"]);

/** looping an Object */
for (let key in user) {
  // console.log(key, user[key]);
}

/** Object methods */
/** Object.keys */
let keys = Object.keys(user);
// console.log(keys);

Object.keys(user).forEach((key) => {
  // console.log(key);
});

/** Object.values */
let values = Object.values(user);
// console.log(values);

Object.values(user).forEach((item) => {
  // console.log(item);
});

/** Object.enteries */

let ents = Object.entries(user);
// console.log(ents);

Object.entries(user).forEach(([key, value]) => {
  // const [a, b] = item
  // console.log(key, value);
});

/** Object.fromEntries */
let arr = [
  ["name", "Mark"],
  ["email", "m@gmail.com"],
];

let obj = Object.fromEntries(arr);
// console.log(obj);

/** object method */
let studunt = {
  name: "Marry",
  age: 23,
  hello: function (params) {
    // console.log(this);
    const hello2 = () => {
      console.log(this);
    };
    hello2();
  },
  x: () => {
    console.log(this);
  },
};
// console.log({...studunt});
// console.log(studunt.hello)
// studunt.hello("hello");
// studunt.x()
// this
// console.log(this);

/** spreading */
// let user1 = {
//   name: "Mark",
//   age: 26,
// };

// let user2 = { ...user1, email: "mark@gmail.com", age: 30 };

// console.log(user1);
// console.log(user2);

/** destructuring */
let [a, b] = [1, 3];
// const { age, email, name } = user2;
// console.log(name, age, email);

// let user3 = { ...user2, ...user1 };
// console.log(user3);

/** clone / deep clone */
let user1 = {
  name: "Mark",
  age: 26,
  address: {
    city: "tlv",
  },
};

let user2 = { ...user1 };
user2.address = { ...user1.address };
let user3 = Object.assign({}, user1);

let user4 = JSON.parse(JSON.stringify(user1));
user4.address.city = "nbmsbg";
// console.log(user4, user1);

/** JSON */
/* JSON.stringify
 * JSON.parse
 */

let numbers = {
  a: "1",
  b: "2",
};

// console.log(numbers);
let json = JSON.stringify(numbers);
// console.log(json);

let obj2 = JSON.parse(json);
// console.log(obj2);

/** class */
class NameOfClass {
  constructor(type) {
    (this.name = "Anne"), (this.type = type);
  }
  method1() {}
  method2 = () => {};
}

class Animal {
  constructor(type, name) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  set type(val) {
    if (val === "blabla") return;
    this._type = val;
  }

  get type() {
    return this._type;
  }
}

// let mydog = new Animal('Dog', 'Shadow');
// let urdog = new Animal('Dog', 'Spots');
// let cat = new Animal('Cat','catcat');

// console.log(mydog.getName());
// urdog.setName('Arrow')

// console.log(urdog.getName());

// cat.type = 'Cow'
// console.log(cat.type);

class Dog extends Animal {
  constructor(name, color) {
    super("Dog", name);
    this.color = color;
  }
  voice() {
    //.. logic
    return "bark";
  }
  // getName(){
  //   return this.name + ' I am a dog'
  // }
}

let dog1 = new Dog("KuKu", "pink");
let dog2 = new Dog("Chichi", "ornge");

console.log(dog1.getName());
console.log(dog2.type);
console.log(dog2.voice());

class Frenchi extends Dog {
  constructor(name, color) {
    super(name, color);
    this.subtype = "french boldug";
  }
  nice() {
    return true;
  }
}

let fernchi1 = new Frenchi("Bob", "Gray");
console.log(fernchi1.getName());
console.log(fernchi1.voice());
console.log(fernchi1.nice());


/**
 * Create a User class
 * Store the name of the user in a "name" variable
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exetends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */
class User {
  constructor(name) {
    this.name = name 
  }

  hello () {
    console.log(`Hello ${this.name}!`)
  }
}

class Student extends User {
  constructor(name) {
    super(name)
  }
}

const arrayOfStudents = [
  new Student("Mike"),   
  new Student("Alex"),  
  new Student("John"), 
]

console.log(arrayOfStudents);

arrayOfStudents.forEach(student => student.hello())