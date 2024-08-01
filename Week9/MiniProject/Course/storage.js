let user = {
    username:'',
    email:'',
}

localStorage.setItem("userinfo", JSON.stringify(user))
const val = localStorage.getItem("userinfo")
console.log(JSON.parse(val));
localStorage.removeItem("userinfo")
localStorage.clear()