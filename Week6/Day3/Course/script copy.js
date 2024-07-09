// const inventory = [
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   {
//     id: 4,
//     car_make: "Land Rover",
//     car_model: "Defender Ice Edition",
//     car_year: 2010,
//   },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];

const getCarMake = (carInventory, car_make) => {
  let zivuchIndex = carInventory.findIndex(
    (item) => item.car_make === car_make
  );
  console.log(mycar);
  return `This is a ${carInventory[zivuchIndex].car_make}
  ${carInventory[zivuchIndex].car_model} from
  ${carInventory[zivuchIndex].car_year}`;
};

// console.log(getCarMake(inventory, "Honda"));

/** sort */

// const names = [3,1,2];

// console.log(names.sort());

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

/**
 * > 0 sort a after b [b, a]
 * < 0 sort a before b [a,b]
 * === 0 keep original order
 */
let sortarr = inventory.sort((a, b) => {
  // return  b.car_make - a.car_make;
  const nameA = a.car_make.toLowerCase();
  const nameB = b.car_make.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

// console.log(sortarr);

/**
Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit
number is produced.
This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

// function calcDigit(num){
//   let arr = new String(num).split("")
//   console.log(arr);
//   let ret = 0;
//   for (let i in arr){
//     ret += Number(arr[i])
//   }
//   console.log(ret);
//   if(ret < 10){
//     return ret
//   }
//   return calcDigit(ret)
// }

function calcDigit(num) {
  let arr = new String(num).split("");
  let ret = arr.reduce((total, item) => total + Number(item), 0);
  return ret < 10 ? ret : calcDigit(ret);
}
// console.log(calcDigit(132189));
