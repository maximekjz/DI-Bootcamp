const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];


let getCarHonda = (carInventory) => {
    let getCar = carInventory.find((item) => item.car_make === 'Honda')
    return `This is a ${getCar.car_make} ${getCar.car_model} from ${getCar.car_year}.`
}
;
console.log(getCarHonda(inventory))


const inventory1 = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

let sortCarInventoryByYear = (carInventory) => {
    carInventory.sort((older, younger) => {
        return older.car_year - younger.car_year
    })
    return carInventory
}
console.log(sortCarInventoryByYear(inventory1))
