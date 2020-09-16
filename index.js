const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener(
        'submit',
        function (event) {
            event.preventDefault();
            this.reset();
        }
    );
}
