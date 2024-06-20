document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactsList = document.getElementById('contacts-list');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name && phone) {
            const contactItem = document.createElement('li');
            contactItem.className = 'contact-item';
            contactItem.textContent = `${name} - ${phone}`;
            
            contactsList.appendChild(contactItem);

            nameInput.value = '';
            phoneInput.value = '';
        }
    });
});
