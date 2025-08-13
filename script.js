document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    let message = '';

    // Get form values
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const msg = document.getElementById('message').value.trim();
    

    // Validate required fields
    if (!fullname || !email || !subject || !msg) {
        valid = false;
        message = 'Please fill in all fields.';
    }
    // Validate email format
    else if (!/^\S+@\S+\.\S+$/.test(email)) {
        valid = false;
        message = 'Please enter a valid email address.';
    }

    const formMessage = document.getElementById('formMessage');
    if (valid) {
        message = 'Thank you for contacting us!';
        formMessage.style.color = '#4caf50';
        document.getElementById('contactForm').reset();
        formMessage.textContent = message;
        alert('form is submitted successfully');
        setTimeout(function() {
            formMessage.textContent = '';
        }, 2000);
    } else {
        formMessage.style.color = '#b06ab3';
        formMessage.textContent = message;
    }
});

// Clear the form message on page load
window.addEventListener('DOMContentLoaded', function() {
    var formMessage = document.getElementById('formMessage');
    if (formMessage) formMessage.textContent = '';

    // Clear message when user starts typing in any field
    var inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            formMessage.textContent = '';
        });
    });
});
