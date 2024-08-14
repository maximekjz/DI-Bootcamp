async function registerUser(event) {
    event.preventDefault();

    const firstName = document.getElementById('f_name').value;
    const lastName = document.getElementById('l_name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
    };

    try {
        const response = await fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Registration successful!');
            window.location.href = '/login.html';
        } else {
            document.getElementById('error-message').textContent = result.message || 'An error occurred';
        }
    } catch (error) {
        console.error('Error during registration:', error);
        document.getElementById('error-message').textContent = 'An error occurred';
    }
}
