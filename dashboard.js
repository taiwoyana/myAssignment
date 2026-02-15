    const user = localStorage.getItem('currentUser');
        if (!user) {
            window.location.href = 'login.html'; // Redirect if not logged in
        } else {
            document.getElementById('welcomeHeader').innerText = `Welcome, ${user}!`;
        }

        function logout() {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        }