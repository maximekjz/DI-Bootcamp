let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    })
    }
displayGroceries()

const cloneGroceries = () => {
    let user = client;
    let shopping = Object.assign({},groceries);
    client = 'Betty'
    shopping.totalPrice="35$"
    shopping.other.paid = false 
    console.log(`client:${client}`)
    console.log(`user: ${user}`)
    console.log(shopping)
}
console.log(cloneGroceries())


// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ? No because user is a copy of client 

// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
// Price and Paid will change because even if shopping is a copy of an object, objects share the same memory so it'll affect both 