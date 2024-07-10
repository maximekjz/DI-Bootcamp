document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

let name_user = document.getElementsByName('name')[0].value
let last_name_user = document.getElementsByName('lastname')[0].value

let data_user = {
    name : name_user,
    lastname : last_name_user
}

const user_info = inexgold1.getElementByName('output')
user_info.textContent = JSON.stringify(data_user);
})