function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace 'your_username' and 'your_password' with the actual pre-made credentials
    if (username === 'admin' && password === 'kennyloveventi') {
        window.location.href = '/main.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
