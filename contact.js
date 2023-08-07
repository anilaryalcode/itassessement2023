document.getElementById('contact-form').addEventListener('submit', function (e) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    if (name === '' || email === '' || phone === '' || message === '') {
        e.preventDefault();
        document.getElementById('error-message').textContent = 'All fields are required.';
        return false;
    }

    if (!email.includes('@')) {
        e.preventDefault();
        document.getElementById('error-message').textContent = 'Please enter a valid email address.';
        return false;
    }

    if (phone.length !== 10) {
        e.preventDefault();
        document.getElementById('error-message').textContent = 'Please enter a valid 10-digit phone number.';
        return false;
    }

    return true;
});
