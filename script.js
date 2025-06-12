document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
        });
});
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault()
            const form = this

            let formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => {
                if (response.ok) {
                    alert('Thank you! Your message has been sent.');
                    form.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            }).catch(error => {
                alert('Error sending message. Check your internet connection.');
            });
        });


      const toggleButton = document.querySelector(".darkmode-toggle");
      const menuToggle = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector(".nav-links");

      window.onload = function () {
        const isDarkmode = localStorage.getItem("darkMode") === "true";
        document.body.classList.toggle("dark-mode", isDarkmode);
        toggleButton.textContent = isDarkmode ? "Light Mode" : "Dark Mode";

        scrollInView();
      };

      toggleButton.addEventListener("click", function () {
        const isDarkmode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDarkmode);
        toggleButton.textContent = isDarkmode ? "Light Mode" : "Dark Mode";
      });
      
      // Mobile menu toggle
      menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
      });
      
      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function() {
          if (window.innerWidth <= 768) {
            navLinks.classList.remove("active");
          }
        });
      });

      const scrollElements = document.querySelectorAll(
        ".scroll-animate, .section-title, .about-image, .about-text, .project-card, .contact-form"
      );

      const scrollInView = () => {
        scrollElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
          }
        });
      };

      window.addEventListener("scroll", scrollInView);
      window.addEventListener("load", scrollInView);
