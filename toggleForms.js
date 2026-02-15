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

        function loginUser() {
            const userInput = document.getElementById('loginUser').value;
            const passInput = document.getElementById('loginPass').value;
            
            // Retrieve stored password using the input username
            const storedPass = localStorage.getItem(userInput);

            if (storedPass && storedPass === passInput) {
                // Store session info to welcome them on the next page
                localStorage.setItem('currentUser', userInput);
                window.location.href = 'dashboard.html';
            } else {
                alert("Invalid username or password.");
            }
        }