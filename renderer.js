const { ipcRenderer } = require('electron');

// Function to handle login form
function handleLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Please fill in all fields.');
            return;
        }

        console.log(`Logging in with Username: ${username} and Password: ${password}`);
        // Add your login logic or IPC communication here
    });

    document.getElementById('register-link').addEventListener('click', (event) => {
        event.preventDefault();
        ipcRenderer.send('navigate', 'registration');
    });
}

// Function to handle registration form
function handleRegistrationForm() {
    const registrationForm = document.getElementById('registration-form');
    if (!registrationForm) return;

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const eventName = document.getElementById('event-name').value;
        const studentName = document.getElementById('student-name').value;

        if (eventName === '' || studentName === '') {
            alert('Please fill in all fields.');
            return;
        }

        console.log(`Registering for Event: ${eventName} by Student: ${studentName}`);
        // Add your registration logic or IPC communication here
    });

    document.getElementById('login-link').addEventListener('click', (event) => {
        event.preventDefault();
        ipcRenderer.send('navigate', 'login');
    });
}

// Initialize forms based on page content
document.addEventListener('DOMContentLoaded', () => {
    handleLoginForm();
    handleRegistrationForm();
});
