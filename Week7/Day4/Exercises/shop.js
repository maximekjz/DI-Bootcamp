const {products} = require("./product")
console.log(products)


const take_product = (product_name) =>{
    for(const product of products){
        if(product.name===product_name ){
            return {price: product.price, category: product.category}
    }
}
return null
}

console.log(take_product('obj1'))
