document.getElementById('button').addEventListener('click',async function(event){
    event.preventDefault(); 

    const formLogin= {
        username : document.getElementById('username').value,
        password : document.getElementById('password').value  
    }
    if(formLogin.username === '' || formLogin.password === '') {
        alert('Please populate all the fields');
    }
    else{
        try {
            const response = await fetch('http://localhost:5001/user/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formLogin),
            });
            
            const result = await response.json();
            console.log('API response:', result);

            if (response.ok) {
                console.log('User loged in successfully');
                localStorage.setItem('userid', result.user.id);
                console.log(localStorage.getItem('userid'));
                alert(result.message);
                window.location.href = '/public/index.html';  
            } else {
                console.error('Error loged in user:', result.message);
                document.getElementById('error-message').textContent = result.message;
            }
        } catch (error) {
          console.error('Error:', error);
        }
    }
})
