document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
        });
});
});

document.querySelector("contact-form").addEventListener("submit", function(e) {
            e.preventDefault();
            let formData = {
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                message: document.querySelector("#message").value
            };

            fetch(this.action, {
                method: "POST",
                headers: {
                    contentType: "application/json",
                    accept: "application/json"                
                },
                body: JSON.stringify(formData)
            })
            }).then(response => {
                if (response.ok) {
                    alert('Thank you, Your message has been sent')
                    this.reset()
                } else {
                    alert('Oops! something went wrong. Please try again')
                }
            }).catch(error => {
                alert("Error sending message. Check your internet connection.")
            })
