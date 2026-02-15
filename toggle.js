// JavaScript logic
        const toggleSwitch = document.getElementById('darkModeToggle');
        const body = document.body;

        // Function to set the theme
        function setTheme(theme) {
            body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }

        // Function to toggle between light and dark mode
        function toggleTheme() {
            if (body.getAttribute('data-theme') === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }

        // Check for saved theme preference on page load
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);

            // Set the toggle switch state based on the saved theme
            if (savedTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        });

        // Event listener for the toggle switch
        toggleSwitch.addEventListener('change', toggleTheme);


