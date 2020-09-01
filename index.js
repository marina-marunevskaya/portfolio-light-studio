const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener(
        'submit',
        function submit (event) {
            event.preventDefault();
            this.reset();
        }
    );
}
