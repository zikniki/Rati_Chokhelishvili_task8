document.getElementById('validationForm').addEventListener('submit', function (event) {
    let formIsValid = true;

    // -------------Username 
    const usernamePattern = /^[a-zA-Z0-9]{5,}$/;
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const usernameSuccess = document.getElementById('usernameSuccess');

    if (!usernamePattern.test(usernameInput.value)) {
        formIsValid = false;
        usernameError.textContent = 'Username must be at least 5 characters long and contain only letters and numbers.';
        usernameSuccess.textContent = '';
    } else {
        usernameError.textContent = '';
        usernameSuccess.textContent = 'Username is valid.';
    }

    // -----------Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');

    if (!emailPattern.test(emailInput.value)) {
        formIsValid = false;
        emailError.textContent = 'Please enter a valid email address.';
        emailSuccess.textContent = '';
    } else {
        emailError.textContent = '';
        emailSuccess.textContent = 'Email is valid.';
    }

    // -----------------Password
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');

    if (!passwordPattern.test(passwordInput.value)) {
        formIsValid = false;
        passwordError.textContent = 'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.';
        passwordSuccess.textContent = '';
    } else {
        passwordError.textContent = '';
        passwordSuccess.textContent = 'Password is valid.';
    }

    if (!formIsValid) {
        event.preventDefault();
    }
});