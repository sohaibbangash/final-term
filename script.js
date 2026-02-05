// Toggle Navbar
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// API Calling for Form
const form = document.getElementById('orderForm');
const status = document.getElementById('formStatus');

if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        status.innerHTML = "Processing....";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        }).then(res => {
            if(res.status === 200) {
                status.innerHTML = "complains done sorry for our regarding mistakes thanks for your compliments! Check Email.";
                status.style.color = "lightgreen";
                form.reset();
            }
        });
    });
}
