document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fullName = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    const confirmPassword = form.querySelector('input[type="password"]:nth-of-type(2)');
    const signUpButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        // Clear previous error messages
        form.querySelectorAll('.error').forEach(error => error.remove());

        // Validate Full Name
        if (fullName.value.trim() === '') {
            showError(fullName, 'Full Name is required');
            valid = false;
        }

        // Validate Email
        if (!validateEmail(email.value)) {
            showError(email, 'Invalid Email Address');
            valid = false;
        }

        // Validate Password
        if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters');
            valid = false;
        }

        // Validate Confirm Password
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
