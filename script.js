// 1. Navbar Toggle Function
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 2. Contact Form API Calling (Dynamic)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const status = document.getElementById('form-status');
        const btn = document.getElementById('submit-btn');
        
        // Form Data
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        btn.innerText = "Sending...";
        btn.disabled = true;

        try {
            // Hum aik dummy API (JSONPlaceholder) use kar rahe hain simulation ke liye
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json' }
            });

            if (response.ok) {
                status.innerHTML = "✅ Message sent successfully!";
                status.style.color = "green";
                contactForm.reset();
            }
        } catch (error) {
            status.innerHTML = "❌ Error: Could not send message.";
            status.style.color = "red";
        } finally {
            btn.innerText = "Send Message";
            btn.disabled = false;
        }
    });
}