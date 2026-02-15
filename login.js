function toggleForms() {
            const signup = document.getElementById('signUpArea');
            const login = document.getElementById('loginArea');
            signup.style.display = signup.style.display === 'none' ? 'block' : 'none';
            login.style.display = login.style.display === 'none' ? 'block' : 'none';
        }

        function registerUser() {
            const user = document.getElementById('regUser').value;
            const pass = document.getElementById('regPass').value;

            if (user && pass) {
                // Store using the username as the key
                localStorage.setItem(user, pass);
                alert("Registration successful! You can now log in.");
                toggleForms();
            } else {
                alert("Please fill in all fields.");
            }
        }

        function registerUser() {
    const user = document.getElementById('regUser').value;
    const pass = document.getElementById('regPass').value;

    if (user && pass) {
        // 1. Get existing users or start with an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // 2. Check if username is already taken
        if (users.some(u => u.username === user)) {
            alert("Username already exists!");
            return;
        }

        // 3. Add new user and save back to localStorage
        users.push({ username: user, password: pass });
        localStorage.setItem('users', JSON.stringify(users));
        
        alert("Registration successful!");
        toggleForms();
    }
}

    function loginUser() {
    const userInput = document.getElementById('loginUser').value;
    const passInput = document.getElementById('loginPass').value;
    
    // 1. Retrieve the full list of users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 2. Search for a matching user object
    const validUser = users.find(u => u.username === userInput && u.password === passInput);

    if (validUser) {
        // 3. Set the "active" session user
        localStorage.setItem('currentUser', validUser.username);
        window.location.href = 'dashboard.html';
    } else {
        alert("Invalid username or password.");
    }
}