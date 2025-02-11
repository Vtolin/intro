document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
        });
});
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();

            let formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            fetch(this.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => {
                if (response.ok) {
                    alert('Thank you! Your message has been sent.');
                    this.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            }).catch(error => {
                alert('Error sending message. Check your internet connection.');
            });
        });
