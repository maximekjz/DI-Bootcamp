// function calcDigit(num) {
//     let arr = new String(num).split('')
//     let ret = 0;
//     for(let i in arr){
//         ret += Number(arr[i])
//     }
//     if(ret<10){
//         return ret
//     }
//     return calcDigit(ret)
// }

// function calcDigit(num) {
//     let arr = new String(num).split('')
//     let ret = arr.reduce((total,num)=> total + Number(num))
//     return ret < 10 ? ret : calcDigit(ret)
// }

// console.log(calcDigit(12789789));


class User {
    constructor(name) {
        this.name = name;
      }
    
    hello() {
        return `Hello ${this.name}`
    }
}
let user1 = new User('Dan')
console.log(user1.hello())

class Student extends User {
    constructor(name){
        super(name)
    }
}