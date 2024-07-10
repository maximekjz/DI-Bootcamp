document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name_user = document.getElementsByName('name')[0].value;
    const lastname_user = document.getElementsByName('lastname')[0].value;

    user_data={name: name_user,
        lastname : lastname_user
    }

    const user_info = document.getElementById('output')
    user_info.textContent = JSON.stringify(user_data)

})