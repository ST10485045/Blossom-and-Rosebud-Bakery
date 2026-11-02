const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual submission

        // Get values
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const type = document.getElementById('enquiryType').value;

        // Error elements
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const typeError = document.getElementById('typeError');
        const successMsg = document.getElementById('formResponse');

        // Reset errors
        nameError.textContent = ""; emailError.textContent = "";
        phoneError.textContent = ""; typeError.textContent = "";
        successMsg.textContent = "";
        let isValid = true;

        // Validation Logic
        if (name === "") {
            nameError.textContent = "Please enter your full name.";
            isValid = false;
        }

        if (email === "" || !email.includes('@')) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (phone === "" || isNaN(phone)) {
            phoneError.textContent = "Please enter a valid phone number.";
            isValid = false;
        }

        if (type === "") {
            typeError.textContent = "Please select an enquiry type.";
            isValid = false;
        }

        // Process Response (Simulated AJAX)
        if (isValid) {
            successMsg.textContent = "Thank you, " + name + "! Your enquiry regarding " + type + " has been received. We will contact you shortly.";
            enquiryForm.reset(); // Clear form
        }
    });
}
