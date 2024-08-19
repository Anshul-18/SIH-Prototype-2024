document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous validation states
        let isValid = true;
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const phoneNumber = document.getElementById('phoneNumber');
        const dob = document.getElementById('dob');

        // Validate Full Name
        if (fullName.value.trim() === '') {
            fullName.classList.add('is-invalid');
            isValid = false;
        } else {
            fullName.classList.remove('is-invalid');
        }

        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // Validate Password
        if (password.value.trim() === '') {
            password.classList.add('is-invalid');
            isValid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        // Validate Confirm Password
        if (confirmPassword.value.trim() !== password.value.trim()) {
            confirmPassword.classList.add('is-invalid');
            isValid = false;
        } else {
            confirmPassword.classList.remove('is-invalid');
        }

        // Validate Phone Number (Optional, but if provided, must be valid)
        const phonePattern = /^[0-9]{10}$/;
        if (phoneNumber.value.trim() !== '' && !phonePattern.test(phoneNumber.value)) {
            phoneNumber.classList.add('is-invalid');
            isValid = false;
        } else {
            phoneNumber.classList.remove('is-invalid');
        }

        // Validate Date of Birth
        if (dob.value.trim() === '') {
            dob.classList.add('is-invalid');
            isValid = false;
        } else {
            dob.classList.remove('is-invalid');
        }

        if (isValid) {
            // Show success modal if form is valid
            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        } else {
            // Show error modal if form is not valid
            var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
            errorModal.show();
        }
    });
});
